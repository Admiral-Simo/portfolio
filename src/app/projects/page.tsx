import React, { FC } from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FiltredProjects from "@/components/FiltredProjects";

export const metadata: Metadata = {
  title: "Projects | Mohamed Khalis",
  description: "Projects created by Mohamed Khalis",
};

const Projects: FC = () => {
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Projects 📂</h1>
      <FiltredProjects />
    </MaxWidthWrapper>
  );
};

export default Projects;
