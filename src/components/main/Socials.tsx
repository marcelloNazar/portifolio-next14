"use client";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link
        href={"https://github.com/marcelloNazar"}
        className="hover:text-accent hover:scale-110 transition-all duration-300"
      >
        <AiOutlineGithub />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/marcello-nazar-7a890922b/"}
        className="hover:text-accent hover:scale-110 transition-all duration-300"
      >
        <AiFillLinkedin />
      </Link>

      <Link
        href={
          "https://api.whatsapp.com/send/?phone=%2B5537999080458&text=Ol%C3%A1%2C+quero+falar+com+voc%C3%AA+sobre+o+meu+site&type=phone_number&app_absent=0"
        }
        className="hover:text-accent hover:scale-110 transition-all duration-300"
      >
        <AiOutlineWhatsApp />
      </Link>
    </div>
  );
};

export default Socials;
