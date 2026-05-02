export type stepType = {
  title: string;
  date: string;
  location: string;
  desc?: string;
};

export const steps: stepType[] = [
  {
    title: "Baccalauréat Général 📚",
    date: "Juin 2024",
    location: "Lycée Polyvalent Stéphane Hessel, Epernay",
    desc: "Mathématiques, Numérique et Sciences de l'Informatique",
  },
  {
    title: "BUT Informatique 1ère année 👨‍💻",
    date: "Septembre 2024 - Juin 2025",
    location: "IUT Reims-Châlons-Charleville, Reims",
  },
  {
    title: "Cuviste 🍾",
    date: "Juillet - Août 2025",
    location: "Champagne Bollinger, Aÿ",
  },
  {
    title: "BUT Informatique 2ème année 👨‍💻",
    date: "Septembre 2025 - Juin 2026",
    location: "IUT Reims-Châlons-Charleville, Reims",
    desc: "Spécilisation développement (C++)",
  },
];

export const getSteps = (t: (key: string) => string): stepType[] => [
  {
    title: t("steps.highschool.title"),
    date: t("steps.highschool.date"),
    location: t("steps.highschool.location"),
    desc: t("steps.highschool.desc"),
  },
  {
    title: t("steps.but1.title"),
    date: t("steps.but1.date"),
    location: t("steps.but1.location"),
  },
  {
    title: t("steps.cellarWorker.title"),
    date: t("steps.cellarWorker.date"),
    location: t("steps.cellarWorker.location"),
  },
  {
    title: t("steps.but2.title"),
    date: t("steps.but2.date"),
    location: t("steps.but2.location"),
    desc: t("steps.but2.desc"),
  },
  {
    title: t("steps.internship.title"),
    date: t("steps.internship.date"),
    location: t("steps.internship.location"),
    desc: t("steps.internship.desc"),
  },
  {
    title: t("steps.imt.title"),
    date: t("steps.imt.date"),
    location: t("steps.imt.location"),
    desc: t("steps.imt.desc"),
  },
];
