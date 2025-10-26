import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { steps } from "@/lib/steps";

const Timeline = () => {
  const timelineSteps = steps;
  return (
    <div className="grid md:grid-cols-4 gap-3">
      {timelineSteps.map((step, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex flex-col-reverse justify-start gap-5">
              <CardTitle>{step.title}</CardTitle>
              <Badge variant="secondary">{step.date}</Badge>
            </div>
            <CardDescription>{step.location}</CardDescription>
          </CardHeader>
          {step.desc ? <CardContent>{step.desc}</CardContent> : ""}
        </Card>
      ))}
    </div>
  );
};

export default Timeline;
