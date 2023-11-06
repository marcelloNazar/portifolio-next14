import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-3 py-4">
        <div>
          <Link href={"/"}>
            <h1 className="text-3xl">
              Marcello <span className="font-thin">Nazar</span>
            </h1>
          </Link>
        </div>
        <Socials />
      </div>
    </header>
  );
};

export default Header;
