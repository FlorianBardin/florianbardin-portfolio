import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const steps = [
  {
    title: "Baccalauréat Général 📚",
    date: "Juin 2024",
    lieu: "Lycée Polyvalent Stéphane Hessel, Epernay",
    desc: "Mathématiques, Numérique et sciences de l'informatique",
  },
  {
    title: "BUT Informatique 1ère année 👨‍💻",
    date: "Septembre 2024 - Juin 2025",
    lieu: "IUT Reims-Chalons-Charleville",
  },
  {
    title: "Cuviste 🍾",
    date: "Juillet-Aout 2025",
    lieu: "Champagne Bollinger, Ay",
  },
  {
    title: "BUT Informatique 2ème année 👨‍💻",
    date: "Septembre 2025 - Juin 2026",
    lieu: "IUT Reims-Chalons-Charleville",
    desc: "Spécilisation développement (C++)",
  },
];

const Timeline = () => {
  return (
    // Créer une grid à la place du flex
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {steps.map((step, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex flex-col-reverse justify-start gap-5">
              <CardTitle>{step.title}</CardTitle>
              <Badge variant="secondary">{step.date}</Badge>
            </div>
            <CardDescription>{step.lieu}</CardDescription>
          </CardHeader>
          {step.desc ? <CardContent>{step.desc}</CardContent> : ""}
        </Card>
      ))}
    </div>
  );
};

export default Timeline;
