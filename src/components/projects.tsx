import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20">
      <p className="font-mono text-sm text-muted-foreground">03. Projets</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Une sélection de mon travail
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col justify-between">
            {/*
              Aperçu : remplacez ce placeholder par
              <Image src="/projects/mon-projet.jpg" alt={project.title} width={640} height={360} className="aspect-video w-full object-cover" />
              une fois vos captures ajoutées dans /public/projects
            */}
            <div className="px-(--card-spacing) pt-(--card-spacing)">
              <PhotoPlaceholder label="Aperçu du projet" className="aspect-video w-full" />
            </div>

            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                Démo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                Code
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}