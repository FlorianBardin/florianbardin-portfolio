"use client";

import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header
      className="flex flex-col h-screen justify-center gap-10 px-5 scroll-mt-30 sm:px-20 md:px-20 lg:px-35"
      id="header"
    >
      <h1 className="text-center">
        <Highlighter
          iterations={2}
          action="underline"
          color="#FFA400"
          padding={0}
        >
          Florian Bardin
        </Highlighter>{" "}
        –{" "}
        {t.rich("title", {
          h: (chunks) => (
            <Highlighter action="circle" color="#FFA400" padding={4}>
              {chunks}
            </Highlighter>
          ),
        })}
      </h1>
      <p className="text-muted-foreground text-center font-medium">
        {t.rich("subtitle", {
          b: (chunks) => <span className="bright">{chunks}</span>,
        })}
      </p>
      <Button className="w-fit self-center" asChild>
        <Link href="https://github.com/FlorianBardin">
          <Github className="h-4 w-4" />
          {t("github")}
        </Link>
      </Button>
    </header>
  );
};

export default Header;
