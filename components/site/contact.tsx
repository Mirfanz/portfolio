"use client";

import React from "react";
import { Button } from "../ui/button";
import { useNav } from "../providers/navigation";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type Props = {};

const Contact = (props: Props) => {
  const { contactRef, servicesRef } = useNav();
  return (
    <main id="contact" ref={contactRef}>
      <div className="container mx-auto pt-14 px-3 lg:px-8 min-h-svh flex justify-center items-start lg:items-center">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 w-full">
          <div className="w-full flex flex-col justify-center h-full">
            <h2
              data-aos={"fade-up"}
              className="text-3xl lg:text-4xl font-bold mt-6 mb-4 lg:mb-8"
            >
              Hubungi Saya...
            </h2>
            <p className="text-muted-foreground mb-8">sdsdsds</p>
          </div>
          <div className="w-full">
            <Card data-aos="zoom-in" className="p-3 lg:p-6 !pt-0">
              <h3 className="text-xl font-semibold text-center my-4 lg:my-6">
                Contact <span className="text-primary">Me</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4 ">
                <Input className="bg-secondary " placeholder="First Name" />
                <Input className="bg-secondary " placeholder="Last Name" />
                <Input
                  className="bg-secondary col-span-2 text-sms"
                  placeholder="Email Address"
                />
                <Textarea
                  className="bg-secondary col-span-2 h-56"
                  placeholder="Message"
                />
                <Button className="col-span-2">Kirim Pesan</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
