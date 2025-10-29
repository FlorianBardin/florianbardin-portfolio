"use client";

import React from "react";
import AnimatedContent from "../AnimatedContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { stepType } from "@/lib/steps";

type TimelineCardProps = {
  step: stepType;
};

const TimelineCard = ({ step }: TimelineCardProps) => {
  return (
    <AnimatedContent>
      <Card className="h-full">
        <CardHeader>
          <div className="flex flex-col-reverse justify-start gap-5">
            <CardTitle>{step.title}</CardTitle>
            <Badge variant="secondary">{step.date}</Badge>
          </div>
          <CardDescription>{step.location}</CardDescription>
        </CardHeader>
        {step.desc ? <CardContent>{step.desc}</CardContent> : ""}
      </Card>
    </AnimatedContent>
  );
};

export default TimelineCard;
