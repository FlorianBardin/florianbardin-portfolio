import React from "react";
import { steps } from "@/lib/steps";
import TimelineCard from "./timeline-card";

const Timeline = () => {
  const timelineSteps = steps;
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
      {timelineSteps.toReversed().map((step, i) => (
        <TimelineCard key={i} step={step} />
      ))}
    </div>
  );
};

export default Timeline;
