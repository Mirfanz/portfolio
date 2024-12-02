"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  CloudSunIcon,
  CoffeeIcon,
  FileSlidersIcon,
  FileSymlinkIcon,
  FileTextIcon,
  HomeIcon,
  MoonStarIcon,
  MousePointerSquareDashedIcon,
  UserRoundPenIcon,
  UserRoundSearchIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useNav } from "../providers/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  const { active } = useNav();

  const { setTheme, themes, theme } = useTheme();
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background">
      <div className="container px-3 lg:px-8 mx-auto py-3">
        <div className="flex items-center gap-8">
          <h3 className="font-bold me-auto text-xl">Mirfanz_</h3>
          <ul className="fixed bottom-0 right-0 left-0 bg-card py-3 text-xs flex justify-evenly lg:bg-transparent lg:py-0 lg:text-base lg:relative lg:gap-8 lg:font-medium">
            <Link
              href={"#home"}
              className={cn(
                "text-center flex flex-col gap-1 items-center duration-150",
                active === "home" && "text-primary"
              )}
            >
              <HomeIcon className="lg:hidden h-5" />
              <li>Home</li>
            </Link>
            <Link
              href={"#services"}
              className={cn(
                "text-center flex flex-col gap-1 items-center duration-150",
                active === "services" && "text-primary"
              )}
            >
              <CoffeeIcon className="lg:hidden h-5" />
              <li>Services</li>
            </Link>
            <Link
              href={"#resume"}
              className={cn(
                "text-center flex flex-col gap-1 items-center duration-150",
                active === "resume" && "text-primary"
              )}
            >
              <FileSymlinkIcon className="lg:hidden h-5" />
              <li>Resume</li>
            </Link>
            <Link
              href={"#projects"}
              className={cn(
                "text-center flex flex-col gap-1 items-center duration-150",
                active === "projects" && "text-primary"
              )}
            >
              <MousePointerSquareDashedIcon className="lg:hidden h-5" />
              <li>Projects</li>
            </Link>
            <Link
              href={"#contact"}
              className={cn(
                "text-center flex flex-col gap-1 items-center duration-150",
                active === "contact" && "text-primary"
              )}
            >
              <UserRoundSearchIcon className="lg:hidden h-5" />
              <li>Contact</li>
            </Link>
          </ul>
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          >
            {theme == "dark" ? (
              <MoonStarIcon className="w-4 h-4" />
            ) : (
              <CloudSunIcon className="w-4 h-4" />
            )}
            <span className="hidden lg:inline">
              {theme == "dark" ? "Dark" : "Light"}
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
