import Copyright from "./Copyright";
import Address from "./Address";
import Sustainability from "./Sustainability";
import Socialmedia from "./Socialmedia";
import Phone from "./Phone";
import Links from "./Links";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col bg-background w-full border-t-4 border-black/10 text-sm z-40"
    >
      <section className="flex flex-col xl:flex-row gap-8 xl:gap-16 px-4 lg:px-12 py-4 bg-black/5">
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
