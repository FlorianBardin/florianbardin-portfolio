import { getSteps } from "@/lib/steps";
import TimelineCard from "./timeline-card";
import { useTranslations } from "next-intl";

const Timeline = () => {
  const t = useTranslations("journey");
  const timelineSteps = getSteps(t);

  return (
    <div className="flex overflow-scroll gap-3">
      {timelineSteps.toReversed().map((step, i) => (
        <TimelineCard key={i} step={step} />
      ))}
    </div>
  );
};

export default Timeline;
