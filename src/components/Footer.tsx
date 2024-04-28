import React, { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Footer: FC = () => {
  return (
    <MaxWidthWrapper className="flex items-center justify-between mt-16 md:mt-0 mb-4 text-sm md:text-md text-zinc-500">
      <p>All rights reserved © Mohamed Khalis {new Date().getFullYear()}</p>
      <div className="hidden md:flex gap-4">
        <Link
          href="https://www.instagram.com/khaliss614/"
          target="_blank"
          className="flex items-center gap-2 dark:hover:text-white hover:text-black duration-300"
        >
          <ArrowTopRightIcon />
          follow me
        </Link>
        <Link
          href="mailto:mohamedkhalis@proton.me"
          className="flex items-center gap-2 dark:hover:text-white hover:text-black duration-300"
        >
          <ArrowTopRightIcon />
          email me
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
