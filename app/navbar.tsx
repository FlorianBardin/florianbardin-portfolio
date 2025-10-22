import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import React from "react";
import Link from "next/link";
import MobileDock from "../src/components/mobile-dock";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <svg
        className="w-6 h-6"
        viewBox="0 0 412 382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M131.9 381.49L49.9298 320L107.69 238.01C117 224.97 136.57 224.97 152.4 220.31L144.95 196.09C129.11 200.74 113.27 212.86 98.3598 207.26L0.549805 171.86L35.0098 74.9699L125.38 103.85C140.3 109.44 145.88 129 155.2 142.05L176.62 127.14C167.31 114.1 150.54 101.99 151.47 86.1499L153.33 0.449951H255.81L258.6 86.1499C258.6 101.99 242.76 114.1 233.45 127.14L253.95 142.05C263.26 129.01 268.85 109.45 284.69 103.85L374.12 74.9699L411.38 171.86L311.7 207.26C295.86 212.85 280.02 200.74 264.19 196.09L256.73 220.31C272.57 224.97 292.13 224.97 302.38 237.08L363.87 319.99L281.88 381.48L222.26 313.47C212.01 301.36 217.61 282.73 217.61 266.88H191.52C191.52 282.72 198.05 301.35 187.8 314.39L131.89 381.47L131.9 381.49Z"
          fill="currentColor"
        />
      </svg>
      <nav className="hidden md:flex gap-6 text-muted-foreground font-medium">
        <Link href="#journey">Parcours</Link>
        <Link href="#projects">Projets</Link>
        <Link href="#tools">Outils</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <AnimatedThemeToggler className="" />
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <title>LinkedIn</title>
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </div>
      <MobileDock />
    </div>
  );
};

export default Navbar;
