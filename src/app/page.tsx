import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Hobbies } from "@/components/hobbies";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Timeline />
        <Separator />
        <Projects />
        <Separator />
        <Skills />
        <Separator />
        <Hobbies />
        <Separator />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}