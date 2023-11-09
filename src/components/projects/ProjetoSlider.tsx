"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Link from "next/link";

// data
const projetoData = [
  {
    title: "Vetcenter",
    img: "/home-vetcenter.png",
    link: "https://vet.marcellonazar.com.br/",
    desc: "alguma descrição",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Controle Financeiro",
    img: "/home-financeiro.png",
    link: "https://financeiro.marcellonazar.com.br/",
    desc: "alguma descrição",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Vetcenter",
    img: "/home-financeiro.png",
    link: "https://marcellonazar.com.br/",
    desc: "alguma descrição",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Vetcenter",
    img: "/home-financeiro.png",
    link: "https://marcellonazar.com.br/",
    desc: "alguma descrição",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Vetcenter",
    img: "/home-financeiro.png",
    link: "https://marcellonazar.com.br/",
    desc: "alguma descrição",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Vetcenter",
    img: "/home-financeiro.png",
    link: "https://marcellonazar.com.br/",
    desc: "alguma descrição",
    tecnologias: ["typescript", "javascript"],
  },
];

const ProjetoSlider = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full w-full gap-x-2"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-center flex  flex-col lg:text-left mb-2 xl:mb-0"
      >
        <h2 className="h2">Meus Projetos</h2>
      </motion.div>
      <div className="w-full h-full">
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
          className="xl:h-[270px]"
        >
          {projetoData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={item.link}>
                  <motion.div
                    variants={slideInFromRight(0.8)}
                    className="relative rounded-lg cursor-pointer overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center max-h-[300px] justify-center relative overflow-hidden group">
                      <Image src={item.img} width={600} height={400} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent to-purple-700 opacity-0 group-hover:opacity-75 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="dalay-100">PROJETO</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            ONLINE
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <HiArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ProjetoSlider;
