import Timeline from "@/components/journey/timeline";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Journey = () => {
  const t = useTranslations("journey");

  return (
    <section className="flex flex-col gap-4 scroll-mt-20" id="journey">
      <div className="flex gap-2 items-center lg:gap-3">
        <Image
          className="h-4 w-4 lg:h-5 lg:w-5"
          width={17}
          height={17}
          src="journey.svg"
          alt="Journey logo"
        />
        <h3>{t("sectionTitle")}</h3>
      </div>
      <Timeline />
    </section>
  );
};

export default Journey;
