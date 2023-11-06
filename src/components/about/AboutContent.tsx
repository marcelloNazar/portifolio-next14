"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { FaJava } from "react-icons/fa";
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
  SiAdobexd,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        stage: "",
        icons: [
          <SiJavascript className="hover:text-[#F7DF1E]" />,
          <SiTypescript className="hover:text-[#007ACC]" />,
          <SiReact className="hover:text-[#61DAFB]" />,
          <SiNextdotjs className="hover:text-accent" />,
          <SiHtml5 className="hover:text-[#E34F26]" />,
          <SiCss3 className="hover:text-[#0093DD]" />,
          <SiTailwindcss className="hover:text-[#38B2AC]" />,
          <SiDart className="hover:text-[#00B4AB]" />,
          <SiFlutter className="hover:text-[#0175C2]" />,
        ],
      },
      {
        title: "Backend",
        stage: "",
        icons: [
          <SiNodedotjs className="hover:text-[#8CC84B]" />,
          <FaJava className="hover:text-[#D90007]" />,
          <SiSpringboot className="hover:text-[#6DB33F]" />,
          <SiSpring className="hover:text-[#88CE02]" />,
          <SiSpringsecurity className="hover:text-[#6DB33F]" />,
        ],
      },
      {
        title: "Database",
        stage: "",
        icons: [
          <SiPostgresql className="hover:text-[#336791]" />,
          <SiMysql className="hover:text-[#0070A3]" />,
          <SiMongodb className="hover:text-[#4DB33D]" />,
        ],
      },
      {
        title: "Cloud",
        stage: "",
        icons: [
          <SiAmazonaws className="hover:text-[#FF9900]" />,
          <SiVercel className="hover:text-[#00A8E0]" />,
          <SiRailway className="hover:text-[#0059D3]" />,
        ],
      },
    ],
  },

  {
    title: "Credenciais",
    info: [
      {
        title: "Analise e Desenvolvimento de Sistemas - Estacio, MG",
        stage: "2024",
        icons: [],
      },
      {
        title: "Desenvolvimento Web Full Stack - Anhanguera, BH-MG",
        stage: "2021",
        icons: [],
      },
      {
        title: "Certificação Java Spring Boot - Alura",
        stage: "2022",
        icons: [],
      },
    ],
  },
  {
    title: "experiencia",
    info: [
      {
        title: "Desenvolvedor Fullstack - autônomo",
        stage: "2021 - 2023",
        icons: [],
      },
    ],
  },
];

export default function AboutContent() {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container mx-auto h-full w-full flex flex-col items-center xl:items-start xl:flex-row"
    >
      <div className="flex flex-1 flex-col justify-center">
        <motion.h2 variants={slideInFromTop} className="h2">
          Criatividade <br />
          <span className="text-accent">&</span> inovação
        </motion.h2>
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl-mb-12 px-2 xl-px-8"
        >
          Eu sou Marcello Nazar, tenho 2 anos de experiencia como desenvolvedor
          FullStack freelancer ajudando pequenas empresas a obterem lucros e
          conquistarem suas metas, através da tecnologia.
        </motion.p>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
      >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-500"
                } capitalize cursor-pointer xl:text-lg relative after:w-8 after:h-0.5 
                  after:absolute after:-bottom-0.5 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex ">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-2 ">
                  {item.icons.map((icon, iconIndex) => {
                    return <div className="text-2xl text-white">{icon}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
