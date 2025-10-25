import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Tool } from "@/lib/tools";

type SectionType = {
  title: string;
  tools: Tool[];
};

const ToolsSection = (props: SectionType) => {
  return (
    <div className="flex flex-col gap-2">
      <h5>{props.title}</h5>
      <div className="flex gap-1.5 flex-wrap">
        {props.tools.map((tool, i) => {
          return (
            <Badge key={i} variant={tool.use}>
              {tool.image ? (
                <Image
                  width="5"
                  height="5"
                  className="h-2.5 w-fit"
                  src={tool.image}
                  alt="Logo"
                />
              ) : (
                ""
              )}
              {tool.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsSection;
