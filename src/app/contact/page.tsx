"use client";

import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full max-w-[700px]"
        >
          <motion.h2 variants={slideInFromTop} className="h2 text-center mb-12">
            Lets connect
          </motion.h2>
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex gap-x-6 w-full"
            >
              <input className="input" placeholder="Nome" type="text" />
              <input className="input" placeholder="email" type="text" />
            </motion.div>
            <motion.input
              variants={slideInFromRight(0.5)}
              className="input"
              placeholder="assunto"
              type="text"
            />
            <motion.textarea
              variants={slideInFromRight(0.5)}
              placeholder="mensagem"
              className="textarea"
            ></motion.textarea>
            <motion.button
              variants={slideInFromLeft(0.5)}
              className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent
            group
            "
            >
              <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <HiArrowRight className="-translate-y-[100%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
