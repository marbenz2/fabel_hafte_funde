import { ChevronsDown } from "lucide-react";

const Header = () => {
  return (
    <div className="relative flex justify-between h-screen w-full bg-header-pattern bg-contain bg-no-repeat bg-right">
      <div className="px-4 py-4 w-full bg-gradient-to-r from-white from-60% to-transparent backdrop-saturate-0">
        <div className="py-px pl-px w-1/2 h-full bg-gradient-to-r from-black from-5% to-transparent">
          <div className="pl-2 w-full h-full bg-white">
            <div className="absolute top-1/2 transform -translate-y-1/2 -rotate-12 font-allura">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl xl:text-[12rem] 2xl:text-[15rem]">
                Fabelhafte Funde
              </h1>
              <p className="text-xl sm:text-2xl lg:text-4xl">
                by Sandra Adamos
              </p>
            </div>
          </div>
        </div>
        <ChevronsDown
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
          size="2rem"
        >
          &copy;
        </ChevronsDown>
      </div>
    </div>
  );
};

export default Header;
