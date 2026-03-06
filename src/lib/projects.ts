import {
  LucideIcon,
  BookUser,
  Gamepad2,
  Satellite,
  SquareKanban,
} from "lucide-react";
import { ReactNode } from "react";

export type ProjectType = {
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  cta: string;
  background: ReactNode;
  className: string;
};

export const getProjects = (
  t: (key: string) => string,
  backgrounds: Record<string, ReactNode>,
): ProjectType[] => [
  {
    Icon: BookUser,
    name: t("portfolio.name"),
    description: t("portfolio.description"),
    href: "https://github.com/FlorianBardin/florianbardin-portfolio",
    cta: t("cta"),
    background: backgrounds.portfolio,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: Satellite,
    name: t("apod.name"),
    description: t("apod.description"),
    href: "https://github.com/FlorianBardin/APOD-viewer",
    cta: t("cta"),
    background: backgrounds.apod,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: SquareKanban,
    name: t("taskflow.name"),
    description: t("taskflow.description"),
    href: "https://github.com/FlorianBardin/task-flow",
    cta: t("cta"),
    background: backgrounds.taskflow,
    className: "md:col-span-1 lg:col-span-2",
  },
  {
    Icon: Gamepad2,
    name: t("steamcrud.name"),
    description: t("steamcrud.description"),
    href: "https://github.com/FlorianBardin/steam-game-crud",
    cta: t("cta"),
    background: backgrounds.steamcrud,
    className: "md:col-span-1 lg:col-span-2",
  },
];
