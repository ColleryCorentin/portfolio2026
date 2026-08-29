"use client";

import { useEffect, useRef, useState } from "react";
import {
  Map as MapLibreMap,
  Marker,
  NavigationControl,
  setWorkerUrl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { siteConfig } from "@/lib/data";

// Turbopack doesn't correctly serve maplibre-gl's internal worker chunk in dev,
// so it's copied to /public (see scripts/copy-maplibre-worker.mjs) and loaded from there.
setWorkerUrl("/maplibre-gl-worker.mjs");

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

const DESTINATION_ZOOM = 12;
const START_ZOOM = 2;
const FLY_DURATION_MS = 7000;

function supportsWebGL2() {
  try {
    const canvas = document.createElement("canvas");
    return !!canvas.getContext("webgl2");
  } catch {
    return false;
  }
}

export function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!supportsWebGL2()) {
      setFailed(true);
      return;
    }

    const { lat, lng } = siteConfig.coordinates;
    const destination: [number, number] = [lng, lat];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let map: MapLibreMap;
    try {
      map = new MapLibreMap({
        container: containerRef.current,
        style: STYLE_URL,
        center: reduceMotion ? destination : [0, 30],
        zoom: reduceMotion ? DESTINATION_ZOOM : START_ZOOM,
        scrollZoom: false,
        attributionControl: { compact: true },
      });
    } catch {
      setFailed(true);
      return;
    }
    mapRef.current = map;

    let loaded = false;
    map.on("error", (e) => {
      if (loaded) return;
      console.error("LocationMap error:", e.error);
      setFailed(true);
    });

    map.addControl(new NavigationControl(), "top-right");

    const markerEl = document.createElement("div");
    markerEl.style.width = "14px";
    markerEl.style.height = "14px";
    markerEl.style.borderRadius = "50%";
    markerEl.style.backgroundColor = "#52525b";
    markerEl.style.border = "2px solid white";
    markerEl.style.boxShadow = "0 1px 4px rgba(0,0,0,0.4)";

    const marker = new Marker({ element: markerEl })
      .setLngLat(destination)
      .addTo(map);

    let styleLoaded = false;
    let isVisible = false;
    let hasFlown = false;

    const tryFly = () => {
      if (hasFlown || reduceMotion || !styleLoaded || !isVisible) return;
      hasFlown = true;
      map.flyTo({
        center: destination,
        zoom: DESTINATION_ZOOM,
        duration: FLY_DURATION_MS,
        essential: true,
      });
    };

    map.once("load", () => {
      loaded = true;
      styleLoaded = true;
      tryFly();
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        isVisible = true;
        tryFly();
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      marker.remove();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  if (failed) {
    const { lat, lng } = siteConfig.coordinates;
    return (
      <a
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=12/${lat}/${lng}`}
        target="_blank"
        rel="noreferrer"
        className="flex h-72 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-muted/40 text-sm text-muted-foreground transition-colors hover:text-foreground sm:h-80"
      >
        <span>Impossible d&apos;afficher la carte interactive</span>
        <span className="underline">Voir {siteConfig.location} sur OpenStreetMap</span>
      </a>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-72 w-full overflow-hidden rounded-2xl border border-border sm:h-80 dark:[&_.maplibregl-canvas]:filter-[invert(1)_hue-rotate(180deg)_brightness(0.95)_contrast(0.9)]"
      role="img"
      aria-label={`Carte de localisation : ${siteConfig.location}`}
    />
  );
}
