import { Button } from "@/components/ui/button";
import { FileX2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("notFound");

  return (
    <main className="flex flex-col items-center flex-1 justify-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <FileX2 size={50} />
        <h1 className="text-4xl">{t("title")}</h1>
        <p className="mx-10 text-center">{t("description")}</p>
      </div>
      <Button asChild>
        <Link href="/">{t("back")}</Link>
      </Button>
    </main>
  );
};

export default NotFound;
