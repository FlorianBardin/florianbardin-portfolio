import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BookUser, Gamepad2, Satellite, SquareKanban } from "lucide-react";
import { Safari } from "./ui/safari";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: BookUser,
    name: "florianbardin.dev",
    description:
      "Site web portfolio regroupant mon parcours, mes projets, mes outils ainsi que mon contact.",
    href: "https://github.com/FlorianBardin/florianbardin-portfolio",
    cta: "Voir en détail",
    background: (
      <Safari
        url="florianbardin.dev"
        imageSrc="portfolio-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: Satellite,
    name: "APOD Viewer",
    description:
      "Application web de visualisation des données de l'API APOD de la Nasa.",
    href: "https://github.com/FlorianBardin/APOD-viewer",
    cta: "Voir en détail",
    background: (
      <Safari
        url="apod-viewer-iota.vercel.app"
        imageSrc="apod-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: SquareKanban,
    name: "Task Flow",
    description:
      "Application web permettant de gérer des tableaux Kanban dans le stockage local du navigateur.",
    href: "https://github.com/FlorianBardin/task-flow",
    cta: "Voir en détail",
    background: (
      <Safari
        url="task-flow-nine-alpha.vercel.app"
        imageSrc="taskflow-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    className: "md:col-span-1 lg:col-span-2",
  },
  {
    Icon: Gamepad2,
    name: "Steam Game CRUD",
    description:
      "Application web CRUD PHP réalisé en duo dans le cadre d'une SAÉ de BUT INFO.",
    href: "https://github.com/FlorianBardin/steam-game-crud",
    cta: "Voir en détail",
    background: (
      <Safari
        url="steam-game-crud.app"
        imageSrc="steamcrud-demo.png"
        className="absolute top-10 lg:top-20 origin-top scale-85 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
    className: "md:col-span-1 lg:col-span-2",
  },
];

export function ProjectsGrid() {
  return (
    <BentoGrid className="grid md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, i) => {
        return <BentoCard key={feature.name} {...feature} />;
      })}
    </BentoGrid>
  );
}
