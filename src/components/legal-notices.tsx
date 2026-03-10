import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { ScrollArea } from "./ui/scroll-area";

const LegalNotices = () => {
  const t = useTranslations("footer");

  return (
    <Dialog>
      <DialogTrigger className="text-sm bright hover:underline font-medium">
        {t("legal")}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{t("legalContent.title")}</DialogTitle>
        </DialogHeader>
        <ScrollArea>
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h5 className="font-bold text-foreground mb-1">
                {t("legalContent.editor")}
              </h5>
              <p>
                {t.rich("legalContent.editorText", {
                  b: () => <br />,
                })}
              </p>
            </section>

            <section>
              <h5 className="font-bold text-foreground mb-1">
                {t("legalContent.hosting")}
              </h5>
              <p>
                {t.rich("legalContent.hostingText", {
                  b: () => <br />,
                })}
              </p>
            </section>

            <section>
              <h5 className="font-bold text-foreground mb-1">
                {t("legalContent.privacy")}
              </h5>
              <p>{t("legalContent.privacyText")}</p>
            </section>

            <section>
              <h5 className="font-bold text-foreground mb-1">
                {t("legalContent.rgpd")}
              </h5>
              <p>{t("legalContent.rgpdText")}</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalNotices;
