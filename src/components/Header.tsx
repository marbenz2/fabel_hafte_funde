import { ChevronsDown } from "lucide-react";
import { ResponsiveDialog } from "./ResponsiveDialog";
import BackgroundHouse from "./background/BackgroundHouse";

const Header = () => {
  return (
    <div className="relative flex h-screen w-full p-4 md:p-12 2xl:p-24 overflow-clip">
      <BackgroundHouse />
      <div className="relative flex w-full h-full bg-white/40 rounded-2xl backdrop-blur-md overflow-clip">
        <div className="flex flex-col w-full h-full p-8 md:p-12 2xl:p-24">
          <div className="flex-1 font-allura">
            <div className="relative flex flex-col w-full h-fit -rotate-3">
              <h1 className="text-7xl xs:text-8xl md:text-9xl lg:text-10xl drop-shadow-lg">
                Fabelhafte
              </h1>
              <h1 className="text-7xl xs:text-8xl md:text-9xl lg:text-10xl drop-shadow-lg">
                Funde
              </h1>
              <p className="absolute -bottom-3 left-0 text-xl md:text-2xl">
                by Sandra Adamos
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col max-w-2xl w-full justify-center gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                Kleider und Spielzeug mit Geschichte
              </h2>
              <p className="text-primary/80 text-md md:text-xl font-semibold">
                Nachhaltig shoppen, regional entdecken!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <ResponsiveDialog type="contact" />
              <ResponsiveDialog type="openings" />
            </div>
          </div>
        </div>
        <ChevronsDown
          className="absolute bottom-0 left-0 right-0 mx-auto animate-bounce"
          size={32}
        />
      </div>
    </div>
  );
};

export default Header;
