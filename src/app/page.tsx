import ParticlesContainer from "@/components/home/ParticlesContainer";
import HomeContent from "@/components/home/HomeContent";
import Avatar from "@/components/home/Avatar";

export default function Home() {
  return (
    <main className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <HomeContent />
      </div>
      <ParticlesContainer />
      <div className="w-full h-full max-w-[700px] max-h-[700px] absolute z-[0] -bottom-40 lg:-bottom-12 lg:right-[4%]">
        <Avatar />
      </div>
    </main>
  );
}
