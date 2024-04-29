import React, { FC } from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
  title: "Uses | Mohamed Khalis",
  description: "Fullstack developer, Content creator, and Public speaker",
};

const Uses: FC = () => {
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Uses 💻</h1>
      <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert mt-8">
        <h3>Computer / Office</h3>
        <ul>
          <li>13.3&quot; Macbook (2020)</li>
        </ul>
        <h3>Coding</h3>
        <ul>
          <li>
            Neovim (
            <a
              className="capitalize"
              href="https://github.com/Admiral-Simo/neovim-config"
            >
              neovim configuration
            </a>
            )
          </li>
          <li>Rose Pine</li>
          <li>Terminal: zsh</li>
        </ul>
        <h3>Software</h3>
        <ul>
          <li>Google Chrome</li>
          <li>Allacrity</li>
          <li>Notion</li>
        </ul>
        <h3>Other Tech</h3>
        <ul>
          <li>TV</li>
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default Uses;
