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
    desc: "Mathématiques, Numérique et sciences de l'informatique",
  },
  {
    title: "BUT Informatique 1ère année 👨‍💻",
    date: "Septembre 2024 - Juin 2025",
    location: "IUT Reims-Chalons-Charleville, Reims",
  },
  {
    title: "Cuviste 🍾",
    date: "Juillet - Aout 2025",
    location: "Champagne Bollinger, Ay",
  },
  {
    title: "BUT Informatique 2ème année 👨‍💻",
    date: "Septembre 2025 - Juin 2026",
    location: "IUT Reims-Chalons-Charleville, Reims",
    desc: "Spécilisation développement (C++)",
  },
];
