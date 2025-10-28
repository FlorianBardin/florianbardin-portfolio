import { Button } from "@/components/ui/button";
import { FileX2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center flex-1 justify-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <FileX2 size={50} />
        <h1 className="text-4xl">404 • Mauvaise route</h1>
        <p className="mx-10 text-center">
          Cette page est introuvable, vous vous êtes sûrement perdus.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Retourner en lieu sûr</Link>
      </Button>
    </main>
  );
};

export default NotFound;
