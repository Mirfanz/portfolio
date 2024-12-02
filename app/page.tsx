import Contact from "@/components/site/contact";
import Home from "@/components/site/home";
import Navbar from "@/components/site/navbar";
import Projects from "@/components/site/projects";
import Resume from "@/components/site/resume";
import Services from "@/components/site/services";
import ToTopButton from "@/components/site/to-top-button.";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Resume />
      <Projects />
      <Contact />
      <ToTopButton />
    </>
  );
}
