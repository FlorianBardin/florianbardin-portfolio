import Timeline from "@/components/timeline";
import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-2 items-center lg:gap-3">
        <Image
          className="h-4 w-4 lg:h-5 lg:w-5"
          width={17}
          height={17}
          src="journey.svg"
          alt="Journey logo"
        />
        <h3 id="journey">Parcours</h3>
      </div>
      <Timeline />
    </section>
  );
};

export default Journey;
