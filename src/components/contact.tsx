              "use client";

import { Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { LocationMap } from "@/components/location-map";
import { siteConfig } from "@/lib/data";

export function Contact() {
  async function copyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    toast.success("Email copié dans le presse-papiers");
  }

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <p className="font-mono text-sm text-muted-foreground">06. Contact</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Discutons de votre projet
      </h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Actuellement disponible pour de nouvelles opportunités. N&apos;hésitez
        pas à me contacter, je réponds rapidement.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button render={<a href={`mailto:${siteConfig.email}`} />} nativeButton={false}>
          <Mail className="size-4" />
          {siteConfig.email}
        </Button>
        <Button variant="outline" size="icon" onClick={copyEmail} aria-label="Copier l'email">
          <Copy className="size-4" />
        </Button>
        <Button
          render={
            <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" />
          }
          nativeButton={false}
          variant="outline"
          size="icon"
          aria-label="GitHub"
        >
          <GithubIcon className="size-4" />
        </Button>
        <Button
          render={
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" />
          }
          nativeButton={false}
          variant="outline"
          size="icon"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="size-4" />
        </Button>
      </div>

      <div className="mt-10">
        <LocationMap />
      </div>
    </section>
  );
}