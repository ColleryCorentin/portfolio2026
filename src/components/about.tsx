import Image from "next/image";
import { about, siteConfig } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20">
      <p className="font-mono text-sm text-muted-foreground">01. À propos</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Qui je suis
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-3">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl sm:order-last sm:col-span-1">
          <Image
            src="/about.jpeg"
            alt="À propos"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-muted-foreground sm:col-span-2">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-sm text-foreground/80">{siteConfig.location}</p>

          <dl className="grid grid-cols-3 gap-4 pt-2 sm:gap-6">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-sm text-muted-foreground">{h.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-foreground">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}