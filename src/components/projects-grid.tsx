import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  BookUser,
  Database,
  Gamepad2,
  Satellite,
  SquareKanban,
} from "lucide-react";

const features = [
  {
    Icon: BookUser,
    name: "Portfolio",
    description: "Portfolio réalisé avec Next.js",
    href: "/",
    cta: "Voir sur GitHub",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "md:col-span-1 lg:row-span-2 lg:col-start-1 lg:col-end-1",
  },
  {
    Icon: Satellite,
    name: "APOD Viewer",
    description:
      "Application web de visualisation des données de l'API APOD de la Nasa.",
    href: "https://github.com/FlorianBardin/APOD-viewer",
    cta: "Voir sur GitHub",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "md:col-span-1 lg:col-start-2 lg:col-end-2 lg:row-span-2",
  },
  {
    Icon: SquareKanban,
    name: "Task Flow",
    description:
      "Application web permettant de gérer des tableaux Kanban dans le stockage local du navigateur.",
    href: "https://github.com/FlorianBardin/task-flow",
    cta: "Voir sur GitHub",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "md:col-span-2 lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-end-1",
  },
  {
    Icon: Gamepad2,
    name: "Steam Game CRUD",
    description:
      "Application web CRUD PHP réalisé en duo dans le cadre d'une SAÉ de BUT INFO.",
    href: "/",
    cta: "Voir sur GitHub",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "md:col-span-1 lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2",
  },
  {
    Icon: Database,
    name: "Base de données JO 2024",
    description:
      "Mise en place d'une base de données dans le cadre des jeux olympiques de Paris.",
    href: "/",
    cta: "Voir sur GitHub",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "md:col-span-1 lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-2",
  },
];

export function ProjectsGrid() {
  return (
    <BentoGrid className="grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
