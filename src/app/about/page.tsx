import AboutContent from "@/components/about/AboutContent";
import Avatar from "@/components/home/Avatar";

const About = () => {
  return (
    <div className="h-full bg-primary/30 pt-28 text-center xl:text-left">
      <div className="hidden xl:flex absolute -bottom-40 -left-[600px]">
        <Avatar />
      </div>
      <AboutContent />
    </div>
  );
};

export default About;
