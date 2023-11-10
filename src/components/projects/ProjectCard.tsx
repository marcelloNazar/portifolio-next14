"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { slideInFromRight } from "@/utils/motion";
import { HiArrowRight } from "react-icons/hi2";

interface Props {
  img: string;
  title: string;
  link: string;
  desc: string;
}

export default function ProjectCard({ img, title, link, desc }: Props) {
  const [isFlipped, setIsFliped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFliped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <motion.div
      variants={slideInFromRight(0.8)}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDirection: "normal" }}
      onAnimationComplete={() => setIsAnimating(false)}
      className="flip-card-inner relative rounded-lg cursor-pointer overflow-hidden flex items-center justify-center group"
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="flip-card-front flex items-center max-h-[300px] justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent to-purple-700 opacity-0 group-hover:opacity-75 transition-all duration-700"></div>
        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-24 group-hover:xl:-translate-y-24 transition-all duration-300">
          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
            <div className="dalay-100 group-hover:-translate-y-4 lg:group-hover:translate-y-0">
              VER
            </div>
            <div className="translate-y-[500%] group-hover:-translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 delay-150">
              MAIS
            </div>
            <div className="text-xl translate-y-[500%] group-hover:-translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 delay-200">
              <HiArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className=" flip-card-back flex items-center max-h-[300px] justify-center relative overflow-hidden group">
        <Image src={img} width={600} height={400} alt="" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent to-purple-700 opacity-0 group-hover:opacity-75 transition-all duration-700"></div>
        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-24 group-hover:xl:-translate-y-24 transition-all duration-300">
          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
            <div className="dalay-100 group-hover:-translate-y-4 lg:group-hover:translate-y-0">
              {title}
            </div>
            <div className="translate-y-[500%] group-hover:-translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 delay-150">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
