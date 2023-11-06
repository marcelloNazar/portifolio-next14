"use client";
import ProjectsBtn from "./ProjectsBtn";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiSpring,
  SiSpringsecurity,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiAmazonaws,
  SiVercel,
  SiRailway,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const HomeContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center flex flex-col z-[20] justify-center xl:pt-0 xl:text-left h-full container mx-auto"
    >
      <motion.h1 variants={slideInFromTop} className="h1">
        Desenvolvedor <br />
        <span className="text-accent">Full Stack</span>
      </motion.h1>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex gap-1 text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8"
      >
        <SiJavascript className="hover:text-[#F7DF1E]" />
        <SiTypescript className="hover:text-[#007ACC]" />
        <SiReact className="hover:text-[#61DAFB]" />
        <SiNextdotjs className="hover:text-accent" />
        <SiNodedotjs className="hover:text-[#8CC84B]" />
        <FaJava className="hover:text-[#D90007]" />
        <SiSpringboot className="hover:text-[#6DB33F]" />
        <SiSpring className="hover:text-[#88CE02]" />
        <SiSpringsecurity className="hover:text-[#6DB33F]" />
        <SiPostgresql className="hover:text-[#336791]" />
        <SiMysql className="hover:text-[#0070A3]" />
        <SiMongodb className="hover:text-[#4DB33D]" />
        <SiHtml5 className="hover:text-[#E34F26]" />
        <SiCss3 className="hover:text-[#0093DD]" />
        <SiAmazonaws className="hover:text-[#FF9900]" />
        <SiVercel className="hover:text-[#00A8E0]" />
        <SiRailway className="hover:text-[#0059D3]" />
        <SiDart className="hover:text-[#00B4AB]" />
        <SiFlutter className="hover:text-[#0175C2]" />
        <SiTailwindcss className="hover:text-[#38B2AC]" />
        <SiFigma className="hover:text-[#1ABC9C]" />
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-center xl:hidden relative z-50"
      >
        <ProjectsBtn />
      </motion.div>
      <motion.div variants={slideInFromRight(0.8)} className="hidden xl:flex">
        <ProjectsBtn />
      </motion.div>
    </motion.div>
  );
};

export default HomeContent;
