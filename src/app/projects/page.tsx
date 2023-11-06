import ProjetoSlider from "@/components/projects/ProjetoSlider";
import ServiceSlider from "@/components/projects/ServicesSlider";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 pt-28 flex items-start">
      <div className="container mx-auto">
        <ServiceSlider />
        <ProjetoSlider />
      </div>
    </div>
  );
};

export default Services;
