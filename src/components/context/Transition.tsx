"use client";

import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],
  },
};

export const Transition = () => {
  const pathName = usePathname();
  return (
    <motion.div key={pathName}>
      <motion.div
        className="fixed z-[40] right-0 bottom-full w-screen h-screen bg-[#0e1626]"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed z-[30] right-0 bottom-full w-screen h-screen bg-[#001f45]"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed z-[20] right-0 bottom-full w-screen h-screen bg-[#283d6e]"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};
