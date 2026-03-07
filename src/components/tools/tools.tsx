import ToolsSection from "@/components/tools/tools-section";
import { Badge } from "@/components/ui/badge";
import {
  databaseTools,
  infraDevOps,
  languages,
  projectManagement,
  webArchitecture,
} from "../../lib/tools";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Tools = () => {
  const t = useTranslations("tools");

  return (
    <section className="flex flex-col gap-4 scroll-mt-20" id="tools">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-start lg:gap-4">
        <div className="flex items-center gap-2 lg:gap-3">
          <Image
            className="h-4 w-4 lg:h-5 lg:w-5"
            width={17}
            height={17}
            src="tools.svg"
            alt="Tools logo"
          />
          <h3>{t("sectionTitle")}</h3>
        </div>
        <div className="space-x-2">
          <Badge>{t("advanced")}</Badge>
          <Badge variant="secondary">{t("intermediate")}</Badge>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolsSection title={t("sections.languages")} tools={languages} />
        <ToolsSection title={t("sections.infra")} tools={webArchitecture} />
        <ToolsSection title={t("sections.infra")} tools={infraDevOps} />
        <ToolsSection title={t("sections.data")} tools={databaseTools} />
        <ToolsSection
          className="lg:col-span-2"
          title={t("sections.project")}
          tools={projectManagement}
        />
      </div>
    </section>
  );
};

export default Tools;
