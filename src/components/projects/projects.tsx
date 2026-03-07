import Image from "next/image";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col gap-4 scroll-mt-20" id="projects">
      <div className="flex gap-2 items-center lg:gap-3">
        <Image
          className="h-4 w-4 lg:h-5 lg:w-5"
          width={17}
          height={17}
          src="projects.svg"
          alt="Projects logo"
        />
        <h3>{t("sectionTitle")}</h3>
      </div>
      <ProjectsGrid />
    </section>
  );
};

export default Projects;
