import React from "react";
import { Tool } from "@/lib/tools";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ToolBadge from "./tool-badge";

type SectionType = {
  title: string;
  tools: Tool[];
  className?: string;
};

const ToolsSection = (props: SectionType) => {
  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1.5 flex-wrap">
          {props.tools.map((tool, i) => {
            return <ToolBadge key={i} delay={i} tool={tool} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolsSection;
