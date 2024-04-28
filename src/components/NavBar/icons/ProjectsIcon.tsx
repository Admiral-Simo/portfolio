import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ProjectsIcon: FC = () => {
  const pathname = usePathname();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        `duration-150 group-hover:text-purple-500 w-5 h-5`,
        pathname === "/projects" ? "text-purple-500" : ""
      )}
    >
      <path
        fillRule="evenodd"
        d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ProjectsIcon;
