"use client";

import React from "react";
import { useNav } from "../providers/navigation";

type Props = {};

const Projects = (props: Props) => {
  const { projectsRef } = useNav();
  return (
    <main id="projects" ref={projectsRef}>
      <div className="container mx-auto pt-14">
        df
      </div>
    </main>
  );
};

export default Projects;
