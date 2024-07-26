import Copyright from "./Copyright";
import Payment from "./Payment";
import Address from "./Address";
import Sustainability from "./Sustainability";
import Socialmedia from "./Socialmedia";
import Phone from "./Phone";
import Links from "./Links";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col bg-background-accent w-full border-t-4 border-white/60 text-sm z-40"
    >
      <Payment />
      <section className="flex flex-col xl:flex-row gap-8 xl:gap-16 px-4 lg:px-12 py-4">
        <Address />
        <Sustainability />
        <div className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <Phone />
          <Socialmedia />
          <Links />
        </div>
      </section>
      <Copyright />
    </footer>
  );
};

export default Footer;
