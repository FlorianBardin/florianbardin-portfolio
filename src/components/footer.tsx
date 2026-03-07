import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="flex justify-center items-center border-t border-border">
      <p className="text-muted-foreground p-6 pb-25 md:pb-6">
        {t("copyright")}
      </p>
    </footer>
  );
};

export default Footer;
