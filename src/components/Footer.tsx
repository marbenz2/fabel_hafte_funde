import {
  CreditCardIcon,
  ExternalLinkIcon,
  HandCoinsIcon,
  HouseIcon,
  InstagramIcon,
  PhoneIcon,
  RecycleIcon,
} from "lucide-react";
import {
  address,
  sustainability,
  socialmedia,
  maps,
  pages,
  creator,
} from "../data/data.json";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col bg-background-accent w-full border-t-4 border-white/60 text-sm"
    >
      <div className="flex bg-white/20 px-4 lg:px-12 py-4 justify-start xl:justify-center">
        <section className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Zahlungsarten</h3>
          <div className="flex gap-4 py-2">
            <HandCoinsIcon size="3em" />
            <CreditCardIcon size="3em" />
          </div>
        </section>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-24 px-4 lg:px-12 py-4">
        <section className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <div className="flex flex-col w-fit gap-2">
            <h3 className="text-xl font-semibold">Adresse</h3>
            <div className="flex gap-4">
              <HouseIcon size="3em" />
            </div>
            <div>
              <p>{address.company.title}</p>
              <p>
                {address.street.name} {address.street.number}
              </p>
              <p>
                {address.zip} {address.city}
              </p>
              <div className="flex items-center gap-2 mt-8">
                <p> Google Maps</p>
                <a href={maps.link} rel="noopener noreferrer" target="_blank">
                  <ExternalLinkIcon size="1.25em" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Nachhaltigkeit</h3>
            <div className="flex gap-4">
              <RecycleIcon size="3em" />
            </div>
            <p>{sustainability.text}</p>
          </div>
        </section>
        <section className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Telefon</h3>
            <a href={`tel:${address.phone}`} className="flex gap-2">
              <div className="flex gap-4">
                <PhoneIcon size="3em" />
              </div>
              <p className="text-2xl sm:text-4xl">{address.phone}</p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Socialmedia</h3>
            <a
              href={socialmedia.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon size="3em" />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Links</h3>
            <div className="flex gap-2 flex-wrap">
              {pages.map((page) => (
                <a
                  key={page.name}
                  href={page.link}
                  className="decoration-dashed underline"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col py-4 px-4 lg:px-12 xl:flex-row xl:justify-center xl:gap-2">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href={creator.link}
            rel="noopener noreferrer"
            target="_blank"
            className="decoration-dashed underline"
          >
            {creator.name}.
          </a>
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
