import { ResponsiveDialog } from "./ResponsiveDialog";
import BackgroundHouse from "./background/BackgroundHouse";

import { address, pages } from "../data/data.json";
import {
  HomeIcon,
  MailIcon,
  MessageSquareHeartIcon,
  ShirtIcon,
} from "lucide-react";

const Header = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full p-4 md:p-12 2xl:p-24 overflow-clip"
    >
      <BackgroundHouse />
      <div className="relative flex flex-col justify-between w-full p-8 md:p-12 2xl:p-24 gap-12 bg-white/40 rounded-2xl backdrop-blur-sm overflow-clip">
        {/* <BackgroundHouse /> */}
        <div className="flex flex-col xl:flex-row gap-24 h-full">
          <div className="flex font-allura w-full">
            <div className="relative flex flex-col w-full h-fit -rotate-3">
              <h1 className="text-7xl xs:text-8xl md:text-9xl lg:text-10xl drop-shadow-lg">
                {address.company.title}
              </h1>
              <p className="absolute -bottom-3 left-0 text-xl md:text-2xl">
                by {address.company.owner}
              </p>
            </div>
          </div>
          <div className="flex gap-12 w-full xl:w-fit justify-center xl:justify-end">
            {pages.map((page) =>
              page.name === "Datenschutz" ||
              page.name === "Impressum" ? null : (
                <a
                  key={page.name}
                  href={page.link}
                  className="text-lg font-semibold"
                >
                  <div className="p-4 bg-primary w-fit rounded-full">
                    {page.name === "Home" && (
                      <HomeIcon stroke="white" size="2em" />
                    )}
                    {page.name === "Kollektionen" && (
                      <ShirtIcon stroke="white" size="2em" />
                    )}
                    {page.name === "Instagram" && (
                      <MessageSquareHeartIcon stroke="white" size="2em" />
                    )}
                    {page.name === "Kontakt" && (
                      <MailIcon stroke="white" size="2em" />
                    )}
                  </div>
                </a>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-24">
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
    </div>
  );
};

export default Header;
