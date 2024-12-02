"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  BabyIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import Image from "next/image";
import { useNav } from "../providers/navigation";
import { motion } from "framer-motion";
import AOS from "aos";

type Props = {};

const Home = (props: Props) => {
  const { homeRef } = useNav();

  return (
    <main id="home" ref={homeRef}>
      <div className="container px-4 lg:px-8 items-center justify-evenly flex flex-col lg:grid lg:grid-cols-12 mx-auto pt-14 pb-14 lg:pb-0 min-h-svh">
        <div className="col-span-12 lg:order-1 lg:col-span-5 flex items-center justify-center">
          <motion.div className="w-40 h-40 lg:w-80 lg:h-80 animate-bounce repeat-0">
            <Image
              className="rounded-tl-full mt-auto rounded-tr-full rounded-bl-full rounded-br-full ring-2 lg:ring-4 ring-offset-1 shadow-primary shadow-lg ring-offset-background ring-primary object-cover"
              src={"/pasfoto2.png"}
              width={500}
              height={500}
              alt="Fotoku"
            />
          </motion.div>
        </div>
        <div className="col-span-12 flex flex-col justify-center lg:col-span-7 text-center lg:text-left">
          <motion.h1
            className="text-3xl lg:text-5xl font-bold mb-1 lg:mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Muhammad Irfan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-semibold text-xl lg:text-3xl mb-4 lg:mb-4"
          >
            I&apos;m a <span className="text-primary">Freelancer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 text-sm bg-card lg:bg-transparent p-2 lg:p-0 rounded-md border lg:border-0 lg:text-base text-muted-foreground"
          >
            Hi, saya Irfan usia 21 tahun. Saya lulus tahun 2022 di SMK Negeri 1
            Wonosegoro jurusan Teknik Kendaraan Ringan. Selain otomotif saya
            juga hobi belajar pemrograman FullStack Web dan sedang belajar
            pemrograman IOT.
            {/* Saya ingin bisa bekerja dibidang tersebut dan
            membuktikan skill otodidak saya bisa berguna untuk perusahaan. */}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-4 items-center"
          >
            <div className="flex lg:order-1 gap-4">
              <Button
                className="border-primary text-primary rounded-full"
                size={"icon"}
                variant={"outline"}
              >
                <InstagramIcon className="w-5 h-5" />
              </Button>
              <Button
                className="border-primary text-primary rounded-full"
                size={"icon"}
                variant={"outline"}
              >
                <LinkedinIcon className="w-5 h-5" />
              </Button>
              <Button
                className="border-primary text-primary rounded-full"
                size={"icon"}
                variant={"outline"}
              >
                <MailIcon className="w-5 h-5" />
              </Button>
              <Button
                className="border-primary text-primary rounded-full"
                size={"icon"}
                variant={"outline"}
              >
                <GithubIcon className="w-5 h-5" />
              </Button>
            </div>
            <Button
              onClick={() => {}}
              className="rounded-full ring-1 ring-primary ring-offset-2 ring-offset-background"
            >
              Request CV
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home;
