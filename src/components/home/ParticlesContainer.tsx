"use client";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const ParticlesContainer = () => {
  const particulesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft(0.5)}
      className="w-full h-full absolute z-[-10] right-0 bottom-0"
    >
      <div className="bg-none xl:bg-explosion opacity-50 xl:bg-cover xl:bg-right w-full h-full absolute translate-z-0"></div>

      <Particles
        className="xl:w-2/3 w-full h-full absolute translate-z-0 xl:right-[96px]"
        id="tsparticles"
        init={particulesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 100,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#9ff",
            },
            links: {
              color: "#22efff",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
};

export default ParticlesContainer;
