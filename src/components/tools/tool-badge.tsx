"use client";

import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Tool } from "@/lib/tools";
import AnimatedContent from "../AnimatedContent";

type ToolBadgeType = {
  tool: Tool;
  delay: number;
};

const ToolBadge = ({ tool, delay }: ToolBadgeType) => {
  return (
    <AnimatedContent
      distance={20}
      direction="horizontal"
      reverse={true}
      delay={delay * 0.1}
    >
      <Badge variant={tool.use}>
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
    </AnimatedContent>
  );
};

export default ToolBadge;
