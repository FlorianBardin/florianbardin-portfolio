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
