import Logo from "./Logo";
import CallToAction from "./CallToAction";

const Header = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full p-4 md:p-12 2xl:p-24 overflow-clip z-40"
    >
      <div className="flex flex-col justify-between gap-16 w-full h-full p-8 md:p-12 2xl:p-24 bg-white/40 rounded-2xl backdrop-blur-sm overflow-clip">
        <div />
        <Logo />
        <CallToAction />
      </div>
    </section>
  );
};

export default Header;
