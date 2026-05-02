"use client";

import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { FileDown, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header
      className="flex flex-col h-screen justify-center gap-25 sm:gap-10 px-5 scroll-mt-30 sm:px-20 md:px-20 lg:px-35"
      id="header"
    >
      <h1 className="text-center">
        <Highlighter iterations={2} action="box" color="#FFA400" padding={4}>
          Florian Bardin
        </Highlighter>{" "}
        –{" "}
        {t.rich("title", {
          h: (chunks) => (
            <Highlighter action="underline" color="#FFA400">
              {chunks}
            </Highlighter>
          ),
        })}
      </h1>
      <p className="text-muted-foreground text-center font-medium hidden sm:block">
        {t.rich("subtitle", {
          b: (chunks) => <span className="bright">{chunks}</span>,
        })}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="w-fit self-center" asChild>
          <Link href="https://github.com/FlorianBardin">
            <Github className="h-4 w-4" />
            {t("github")}
          </Link>
        </Button>
        <Button variant={"ghost"} className="w-fit self-center" asChild>
          <a href="/resume.pdf" download>
            <FileDown className="h-4 w-4" />
            {t("resume")}
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
