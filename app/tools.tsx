import ToolsSection from "@/components/tools-section";
import { Badge } from "@/components/ui/badge";
import {
  backTools,
  dataTools,
  frontTools,
  otherTools,
  softwareTools,
} from "@/lib/tools";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between lg:justify-start lg:gap-4">
        <div className="flex items-center gap-2 lg:gap-3">
          <Image
            className="h-4 w-4 lg:h-5 lg:w-5"
            width={17}
            height={17}
            src="tools.svg"
            alt="Tools logo"
          />
          <h3 id="tools">Outils</h3>
        </div>
        <div className="space-x-2">
          <Badge>Utilisation régulière</Badge>
          <Badge variant="secondary">Utilisation occasionel</Badge>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolsSection title="🎨 Front-end" tools={frontTools} />
        <ToolsSection title="🛠️ Back-end" tools={backTools} />
        <ToolsSection title="🗄️ Base de données" tools={dataTools} />
        <ToolsSection title="🧰 Logiciels" tools={softwareTools} />
        <ToolsSection title="Autres" tools={otherTools} />
      </div>
    </section>
  );
};

export default Tools;
