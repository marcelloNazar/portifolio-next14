"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Avatar = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft(0.8)}
      className="hidden xl:flex xl:max-w-none"
    >
      <Image
        src={"/avatarMarcello.png"}
        width={700}
        height={700}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </motion.div>
  );
};

export default Avatar;
