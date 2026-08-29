"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { education, experience } from "@/lib/data";

type Row = {
  period: string;
  heading: string;
  subheading: string;
  description: string[];
};

const TABS = [
  {
    key: "experience",
    label: "Expériences",
    rows: experience.map(
      (item): Row => ({
        period: item.period,
        heading: item.title,
        subheading: item.company,
        description: item.description,
      })
    ),
  },
  {
    key: "education",
    label: "Études",
    rows: education.map(
      (item): Row => ({
        period: item.period,
        heading: item.degree,
        subheading: item.school,
        description: item.description,
      })
    ),
  },
] as const;

export function Timeline() {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>(
    "experience"
  );
  const rows = TABS.find((tab) => tab.key === active)?.rows ?? [];

  return (
    <section id="parcours" className="scroll-mt-16 py-20">
      <p className="font-mono text-sm text-muted-foreground">02. Parcours</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Mon expérience et mes études
      </h2>

      <div className="mt-8 inline-flex gap-1 rounded-lg border border-border p-1">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              active === tab.key
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 divide-y divide-border">
        {rows.map((row) => (
          <div
            key={`${row.heading}-${row.period}`}
            className="grid gap-1 py-6 first:pt-0 last:pb-0 sm:grid-cols-4 sm:gap-6"
          >
            <p className="font-mono text-sm text-muted-foreground">
              {row.period}
            </p>

            <div className="space-y-2 sm:col-span-3">
              <div>
                <h3 className="font-medium text-foreground">{row.heading}</h3>
                <p className="text-sm text-muted-foreground">
                  {row.subheading}
                </p>
              </div>
              {row.description.length > 0 && (
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {row.description.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
