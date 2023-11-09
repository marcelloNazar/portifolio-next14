"use client";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import path from "path";
import { Transition } from "../context/Transition";

export const navData = [
  { name: "inicio", path: "/", icon: <HiHome /> },
  { name: "sobre", path: "/about", icon: <HiUser /> },
  { name: "projetos", path: "/projects", icon: <HiViewColumns /> },
];

const Nav = () => {
  const pathName = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState(pathName);

  useEffect(() => {
    if (prevPath !== pathName) {
      setIsRouting(true);
    }
  }, [prevPath, pathName]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(pathName);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <nav
      className="absolute flex flex-col items-center justify-center gap-y-4 h-max mt-auto 
      bottom-[11%] md:bottom-[2%] z-[50] top-0 w-full"
    >
      {isRouting && <Transition />}
      <div
        className="flex items-center justify-between gap-x-10 px-10
        bg-white/10 w-max h-12 backdrop-blur-sm text-xl rounded-xl"
      >
        {navData.map((link, index) => {
          return (
            <Link
              prefetch={false}
              className={`${
                link.path === pathName && " bg-accent/30 rounded-full p-1"
              } relative flex items-center group hover:text-accent hover:scale-110 transition-all duration-300`}
              key={index}
              href={link.path}
            >
              <div className="absolute h-10 w-[104px] left-1/2 transform -translate-x-1/2 bottom-[44px] hidden group-hover:flex">
                <div className="bg-white/10 relative flex items-center justify-center w-full h-full rounded-xl">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="absolute border-solid border-t-white/10 border-t-8 border-x-transparent border-x-[6px] border-b-0.5 -mb-[48px]"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
