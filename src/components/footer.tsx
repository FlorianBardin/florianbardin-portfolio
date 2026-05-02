import { useTranslations } from "next-intl";
import LegalNotices from "./legal-notices";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="flex justify-center items-center border-t border-border">
      <p className="text-center text-muted-foreground p-6 pb-25 md:pb-6">
        {t("copyright")} • <LegalNotices />
      </p>
    </footer>
  );
};

export default Footer;
