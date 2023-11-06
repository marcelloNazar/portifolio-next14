"use client";

import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

interface AuthProviderProps {
  children: React.ReactNode;
}

const TransitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const Providers = ({ children }: AuthProviderProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName}>
        <motion.div
          className="absolute z-[40] top-0 bottom-0 right-full w-screen h-screen bg-[#0e1626]"
          variants={TransitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute z-[30] top-0 bottom-0 right-full w-screen h-screen bg-[#283d6e]"
          variants={TransitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute z-[20] top-0 bottom-0 right-full w-screen h-screen bg-[#001f45]"
          variants={TransitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>

        {children}
      </motion.div>
    </AnimatePresence>
  );
};
