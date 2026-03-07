import { getSteps } from "@/lib/steps";
import TimelineCard from "./timeline-card";
import { useTranslations } from "next-intl";

const Timeline = () => {
  const t = useTranslations("journey");
  const timelineSteps = getSteps(t);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
      {timelineSteps.toReversed().map((step, i) => (
        <TimelineCard key={i} step={step} />
      ))}
    </div>
  );
};

export default Timeline;
