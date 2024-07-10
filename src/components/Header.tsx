import { ChevronsDown } from "lucide-react";
import Openings from "./Openings";

const Header = () => {
  return (
    <div className="relative flex justify-between h-screen w-full bg-header-pattern bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right">
      <div className="px-4 py-4 w-full bg-gradient-to-r from-white from-10% md:from-20% lg:from-40% xl:from-50% 2xl:from-60% to-transparent backdrop-saturate-0">
        <div className="absolute top-1/4 transform -translate-y-1/4 -rotate-12 font-allura">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl xl:text-[12rem] 2xl:text-[15rem]">
            Fabelhafte Funde
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl">by Sandra Adamos</p>
        </div>
        <Openings />
        <ChevronsDown
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
          size="2.5rem"
        >
          &copy;
        </ChevronsDown>
      </div>
    </div>
  );
};

export default Header;
