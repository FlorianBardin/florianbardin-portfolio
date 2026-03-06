import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Safari } from "../ui/safari";
import { getProjects } from "@/lib/projects";
import { useTranslations } from "next-intl";

export function ProjectsGrid() {
  const t = useTranslations("projects");

  const backgrounds = {
    portfolio: (
      <Safari
        url="florianbardin.dev"
        imageSrc="portfolio-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    apod: (
      <Safari
        url="apod-viewer-iota.vercel.app"
        imageSrc="apod-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    taskflow: (
      <Safari
        url="task-flow-nine-alpha.vercel.app"
        imageSrc="taskflow-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    steamcrud: (
      <Safari
        url="steam-game-crud.app"
        imageSrc="steamcrud-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
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
