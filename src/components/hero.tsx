import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] flex-col justify-center gap-6 py-24"
    >
      <p className="font-mono text-sm text-muted-foreground">
        Bonjour, je suis
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <h2 className="text-xl text-muted-foreground sm:text-2xl">
        {siteConfig.title}
      </h2>
      <p className="max-w-xl text-muted-foreground">{siteConfig.tagline}</p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button render={<a href="#projects" />} nativeButton={false}>
          Voir mes projets
          <ArrowRight className="size-4" />
        </Button>
        <Button render={<a href="#contact" />} variant="outline" nativeButton={false}>
          Me contacter
        </Button>
      </div>

      <div className="flex items-center gap-4 pt-4 text-muted-foreground">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-5" />
        </a>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Email"
          className="transition-colors hover:text-foreground"
        >
          <Mail className="size-5" />
        </a>
      </div>
    </section>
  );
}
