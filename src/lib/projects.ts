import {
  LucideIcon,
  BookUser,
  Satellite,
  SquareKanban,
  Grape,
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
    Icon: Grape,
    name: t("vitis.name"),
    description: t("vitis.description"),
    href: "https://github.com/FlorianBardin/vitis-api",
    cta: t("cta"),
    background: backgrounds.vitis,
    className: "md:col-span-1 lg:col-span-2",
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
];
