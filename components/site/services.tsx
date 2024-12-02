"use client";

import {
  ArrowDownRightIcon,
  BrushIcon,
  CircuitBoardIcon,
  Code2Icon,
  DatabaseZap,
  DatabaseZapIcon,
  GlobeLockIcon,
  RadioIcon,
  ShieldAlertIcon,
  TabletSmartphoneIcon,
  WifiIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useNav } from "../providers/navigation";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

type Props = {};

const Services = (props: Props) => {
  const { servicesRef } = useNav();
  const services = [
    {
      icon: <GlobeLockIcon className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore tempore placeat, necessitatibus ea fuga.",
    },
    {
      icon: <TabletSmartphoneIcon className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore tempore placeat, necessitatibus ea fuga.",
    },
    {
      icon: <DatabaseZapIcon className="w-8 h-8" />,
      title: "Backend Enginer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore tempore placeat, necessitatibus ea fuga.",
    },
    {
      icon: <BrushIcon className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore tempore placeat, necessitatibus ea fuga.",
    },
    {
      icon: <CircuitBoardIcon className="w-8 h-8" />,
      title: "PCB Design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore tempore placeat, necessitatibus ea fuga.",
    },
    {
      icon: <RadioIcon className="w-8 h-8" />,
      title: "IOT Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore tempore placeat, necessitatibus ea fuga.",
    },
  ];
  return (
    <main id="services" ref={servicesRef}>
      <div className="container px-3 lg:px-8 mx-auto pt-14">
        <h2 className="text-3xl font-bold text-center mt-6 mb-8">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {services.map((item) => (
            <div data-aos="fade-up">
              <Card className="p-4 hover:border-primary hover:scale-[1.02] border duration-200">
                <div className="flex items-center justify-between">
                  {item.icon}
                  <Button
                    size={"icon"}
                    variant={"secondary"}
                    className="rounded-full"
                  >
                    <ArrowDownRightIcon className="!w-5 !h-5" />
                  </Button>
                </div>
                <h3 className="font-bold text-xl mt-2 mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description} Lorem, ipsum dolor.
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
