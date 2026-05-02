import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Safari } from "../ui/safari";
import { getProjects } from "@/lib/projects";
import { useTranslations } from "next-intl";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";

export function ProjectsGrid() {
  const t = useTranslations("projects");

  const backgrounds = {
    portfolio: (
      <Safari
        url="florianbardin.dev"
        imageSrc="portfolio-demo.png"
        className="absolute top-10 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    apod: (
      <Safari
        url="apod-viewer-iota.vercel.app"
        imageSrc="apod-demo.png"
        className="absolute top-10 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    vitis: (
      <Safari
        url="vitisapi.app"
        imageSrc="vitis-demo.png"
        className="absolute top-10 origin-top scale-85 mask-[linear-gradient(to_top,transparent_20%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    foehn: (
      <Terminal className="absolute top-10 left-1/2 -translate-x-1/2 origin-top scale-85 mask-[linear-gradient(to_top,transparent_50%,#000_100%)] md:mask-[linear-gradient(to_top,transparent_20%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        <TypingAnimation>
          foehn deploy github.com/FlorianBardin/apod-viewer
        </TypingAnimation>
        <AnimatedSpan className="text-blue-400">Deploying ...</AnimatedSpan>
        <AnimatedSpan>App deployed :</AnimatedSpan>
        <AnimatedSpan> URL: new-app-1234.foehn.localhost</AnimatedSpan>
        <AnimatedSpan> App ID: new-app-1234</AnimatedSpan>
        <TypingAnimation>foehn remove new-app-1234</TypingAnimation>
        <AnimatedSpan className="text-red-400">Removing ...</AnimatedSpan>
        <AnimatedSpan>App with ID new-app-1234 removed</AnimatedSpan>
      </Terminal>
      // <Safari
      //   url="task-flow-nine-alpha.vercel.app"
      //   imageSrc="taskflow-demo.png"
      //   className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      // />
    ),
  };

  const projects = getProjects(t, backgrounds);

  return (
    <BentoGrid className="grid md:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, i) => {
        return <BentoCard key={i} {...project} />;
      })}
    </BentoGrid>
  );
}
