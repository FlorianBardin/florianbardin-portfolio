import React from "react";
import { Dock, DockIcon } from "./ui/dock";
import Link from "next/link";
import { ChevronsLeftRightEllipsis, Route, Send, ToolCase } from "lucide-react";

const MobileDock = () => {
  return (
    <Dock className="fixed bottom-6 left-0 right-0 z-50 flex justify-around gap-4 backdrop-blur-md md:hidden">
      <DockIcon>
        <Link href="#parcours">
          <Route />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#projets">
          <ChevronsLeftRightEllipsis />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#outils">
          <ToolCase />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#contact">
          <Send />
        </Link>
      </DockIcon>
    </Dock>
  );
};

export default MobileDock;
