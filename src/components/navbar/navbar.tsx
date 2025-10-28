import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import React from "react";
import Link from "next/link";
import MobileDock from "./mobile-dock";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center backdrop-blur-md bg-background/80 py-6 px-8 sm:px-10 md:px-16 lg:px-28 border-b">
        <Link href="#header">
          <svg
            className="h-6 w-6"
            width="404"
            height="383"
            viewBox="0 0 404 383"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 325.73H23.2899L88.0399 0.0100098H64.74L0 325.73Z"
              fill="currentColor"
            />
            <path
              d="M42.73 325.73H89.3199L154.07 0.0100098H107.48L42.73 325.73Z"
              fill="currentColor"
            />
            <path
              d="M342.51 153.45C357.31 137.34 368.23 117.11 372.6 95.14C383.04 42.61 352.04 0 303.36 0H173.66L108.91 325.72H250.91C304.47 325.72 357.42 282.22 367 228.67C372.54 197.71 362.56 170.38 342.52 153.44L342.51 153.45Z"
              fill="currentColor"
            />
            <path
              d="M401.4 150.72C398.52 165.19 392.81 178.91 384.98 191.19C381.95 177.07 375.91 164.05 367.13 153.04C379.02 136.74 387.2 118.34 391.02 99.0699C391.7 95.6099 392.24 92.15 392.61 88.72C392.73 88.93 392.84 89.17 392.96 89.4C393.25 89.96 393.52 90.53 393.81 91.11C394.1 91.67 394.39 92.26 394.66 92.84C402.9 108.87 405.71 128.95 401.38 150.73L401.4 150.72Z"
              fill="currentColor"
            />
            <path
              d="M0 344.1H22.7599L38.1399 381.96H15.37L0 344.1Z"
              fill="currentColor"
            />
            <path
              d="M42.73 344.1H89.24L104.61 381.96H58.11L42.73 344.1Z"
              fill="currentColor"
            />
            <path
              d="M396.09 284.97C392.09 307.31 380.59 327.88 364.66 344.3C342.3 367.32 311.26 382.16 280 382.16H124.59L109.22 344.3H259.49C319.38 340.74 375.18 292.16 385.78 232.93C386.13 230.93 386.44 228.95 386.67 226.95C386.92 227.4 387.16 227.86 387.37 228.35C387.66 228.93 387.95 229.5 388.24 230.08C388.53 230.64 388.82 231.23 389.09 231.79C396.8 246.87 399.62 265.18 396.08 284.98L396.09 284.97Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <nav className="hidden md:flex gap-6 text-muted-foreground font-medium">
          <Link href="#journey" className="hover-link">
            Parcours
          </Link>
          <Link href="#projects" className="hover-link">
            Projets
          </Link>
          <Link href="#tools" className="hover-link">
            Outils
          </Link>
          <Link href="#contact" className="hover-link">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <AnimatedThemeToggler className="cursor-pointer" />
          <Link href="https://www.linkedin.com/in/florianbardin/">
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
          </Link>
        </div>
      </div>
      <MobileDock />
    </>
  );
};

export default Navbar;
