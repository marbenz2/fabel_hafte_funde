import Logo from "./Logo";
import CallToAction from "./CallToAction";
import { Navigation } from "../Navigation";

const Header = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full p-0 md:p-12 2xl:p-24 overflow-clip z-40"
    >
      <div className="flex flex-col justify-between gap-16 w-full h-full p-8 md:p-12 2xl:p-24 bg-white/40 backdrop-blur-sm overflow-clip">
        <Navigation />
        <Logo />
        <CallToAction />
      </div>
    </section>
  );
};

export default Header;
