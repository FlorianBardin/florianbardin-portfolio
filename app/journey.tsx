import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <div>
      <div className="flex gap-2 items-center lg:gap-3">
        <Image
          className="h-4 w-4 lg:h-5 lg:w-5"
          width={17}
          height={17}
          src="journey.svg"
          alt="Journey logo"
        />
        <h3>Parcours</h3>
      </div>
    </div>
  );
};

export default Journey;
