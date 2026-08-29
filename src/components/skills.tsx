import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20">
      <p className="font-mono text-sm text-muted-foreground">04. Compétences</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Ce que j&apos;utilise
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-foreground">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}