"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Linguagens",
    description: "Typescript, Java, Dart",
  },
  {
    icon: <RxPencil2 />,
    title: "FrontEnd",
    description: "React, NextJs, Tailwind",
  },
  {
    icon: <RxDesktop />,
    title: "Backend",
    description: "Spring Boot, NodeJs",
  },
  {
    icon: <RxReader />,
    title: "Mobile",
    description: "Flutter, React Native",
  },
  {
    icon: <RxRocket />,
    title: "DB",
    description: "MySQL, Mongo, Postegres",
  },
  {
    icon: <RxRocket />,
    title: "Bot Wpp",
    description: "Typebot, Venom-bot",
  },
  {
    icon: <RxRocket />,
    title: "UI|UX",
    description: "Figma, Framer Motion",
  },
];

const ServiceSlider = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col w-full xl:flex-row gap-x-2"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-center flex xl:w-[22%] flex-col lg:text-left mb-2 xl:mb-0"
      >
        <h2 className="h2">Tecnologias</h2>
      </motion.div>
      <motion.div variants={slideInFromTop} className="w-full xl:max-w-[78%]">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="xl:h-[170px]"
        >
          {serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="bg-white/5 rounded-lg px-3 py-4 pb-8 justify-between flex-col group cursor-pointer
              hover:bg-white/10 transition-all duration-300
              "
                >
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <div className="text-2xl text-accent">{item.icon}</div>
                      <div className="mb-2 text-lg">{item.title}</div>
                    </div>
                    <div className="text-3xl">
                      <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                    </div>
                  </div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default ServiceSlider;
