"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowUpToLineIcon } from "lucide-react";
import { useNav } from "../providers/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const ToTopButton = (props: Props) => {
  const { active } = useNav();
  return (
    <div
      className={cn(
        "fixed bottom-20 lg:bottom-4 right-6 duration-500",
        active == "home" && "translate-y-80"
      )}
    >
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={"rounded-full animate-bounce"}
        variant={"secondary"}
        size={"icon"}
      >
        <ArrowUpToLineIcon />
      </Button>
    </div>
  );
};

export default ToTopButton;
