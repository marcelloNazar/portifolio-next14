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
    desc: "Sistema de gestão para clinicas veterinarias, frontend feito em NextJs e TailwindCss.",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Controle Financeiro",
    img: "/home-financeiro.png",
    link: "https://financeiro.marcellonazar.com.br/",
    desc: "Sistema para controle de finanças, feito utilizando apenas o framework NextJs e sua pasta api para o backend, authenticação utilizando NextAuth e provider do google.",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "API Vetcenter",
    img: "/doc-api-vet.png",
    link: "https://api-vet-oe5t.onrender.com/swagger-ui/index.html",
    desc: "Api para sistema de gestão de clinica veterinaria, backend feito em Java Spring Boot e Banco de dados Mysql, sistema de autenticação com o Spring security, com 2 tipos de usuarios, ADM e VETERINARIO.",
    tecnologias: ["typescript", "javascript"],
  },
  {
    title: "Api Gestão",
    img: "/doc-api-gestao.png",
    link: "https://marcellonazar.com.br/",
    desc: "Api sistema de gestão para empresas Feito em Java Spring Boot Para gerenciamento de tarefas e finanças, autenticação com Spring Security e 2 tipos de usuario, ADM e Funcionario.",
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
        className="text-center flex flex-col lg:text-left"
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
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-space to-accent opacity-0 group-hover:opacity-90 transition-all duration-700">
                        <div className="flex flex-col py-2 px-4 gap-1 w-full h-full text-white">
                          <h3>{item.title}</h3>
                          <h3>{item.desc}</h3>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 translate-y-full group-hover:-translate-y-4 group-hover:-translate-x-6 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="dalay-100 group-hover:-translate-y-0">
                            VER
                          </div>
                          <div className="translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-150">
                            DEPLOY
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-200">
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
