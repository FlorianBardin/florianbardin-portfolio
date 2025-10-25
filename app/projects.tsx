import React from "react";
import Image from "next/image";
import { ProjectsGrid } from "@/components/projects-grid";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center lg:gap-3">
        <Image
          className="h-4 w-4 lg:h-5 lg:w-5"
          width={17}
          height={17}
          src="projects.svg"
          alt="Projects logo"
        />
        <h3 id="projects">Projets</h3>
      </div>
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
