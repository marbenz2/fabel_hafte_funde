import { ResponsiveDialog } from "./ResponsiveDialog";
import BackgroundHouse from "./background/BackgroundHouse";

const Header = () => {
  return (
    <div className="relative flex min-h-screen w-full p-4 md:p-12 2xl:p-24 overflow-clip">
      <BackgroundHouse />
      <div className="relative flex flex-col justify-between w-full p-8 md:p-12 2xl:p-24 gap-12 bg-white/40 rounded-2xl backdrop-blur-sm overflow-clip">
        {/* <BackgroundHouse /> */}
        <div className="flex font-allura">
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
        <div className="flex flex-col max-w-2xl w-full gap-12">
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
    </div>
  );
};

export default Header;
