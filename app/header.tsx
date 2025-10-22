import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-10 my-20 px-5 sm:px-20 md:my-30 md:px-30 lg:px-35">
      <h1 className="text-center">
        <Highlighter
          iterations={2}
          action="underline"
          color="#FFA400"
          padding={0}
        >
          Florian Bardin
        </Highlighter>{" "}
        – Étudiant en informatique et concepteur d’expériences{" "}
        <Highlighter action="circle" color="#FFA400" padding={4}>
          web
        </Highlighter>
        .
      </h1>
      <p className="text-muted-foreground text-center font-medium">
        Actuellement <span className="highl">étudiant</span> à{" "}
        <span className="highl">Reims</span>, je{" "}
        <span className="highl">conçois des expériences digitales simples</span>{" "}
        et <span className="highl">agréables</span> à utiliser. J’aime{" "}
        <span className="highl">explorer de nouvelles technologies</span> et
        méthodes de travail pour{" "}
        <span className="highl">constamment progresser</span>.
      </p>
      <Button className="w-fit self-center" asChild>
        <Link href="https://github.com/FlorianBardin">
          <Github className="h-4 w-4" />
          Voir sur GitHub
        </Link>
      </Button>
    </div>
  );
};

export default Header;
