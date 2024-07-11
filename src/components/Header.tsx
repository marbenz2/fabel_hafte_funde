import { ChevronsDown } from "lucide-react";
import Openings from "./Openings";

const Header = () => {
  return (
    <div className="relative flex h-screen w-full bg-header-pattern bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right">
      <div className="p-0 md:p-14 w-full bg-gradient-to-r from-white from-10% md:from-20% lg:from-40% xl:from-50% 2xl:from-60% to-transparent">
        <div className="relative flex h-full w-full shadow-none md:shadow-xl backdrop-blur-sm">
          <div className="absolute left-4 top-1/4 transform -translate-y-1/4 -rotate-12 font-allura">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[15rem]">
              Fabelhafte Funde
            </h1>
            <p className="text-xl sm:text-2xl lg:text-4xl">by Sandra Adamos</p>
          </div>

          <div className="absolute bg-white/60 md:bg-transparent w-full md:w-fit p-4 bottom-1/4 transform translate-y-2/4 md:bottom-4 md:translate-y-0 left-0 md:left-4">
            <Openings />
          </div>
          <ChevronsDown
            className="absolute m-auto left-0 right-0 bottom-4 animate-bounce"
            size="2.5rem"
          >
            &copy;
          </ChevronsDown>
        </div>
      </div>
    </div>
  );
};

export default Header;
