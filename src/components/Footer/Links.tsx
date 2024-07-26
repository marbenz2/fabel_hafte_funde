import { links } from "../../data/data.json";
import { ResponsiveDialog } from "../ResponsiveDialog";

const Links = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold">Links</h3>
      <div className="flex gap-2 flex-wrap">
        {links.map((link) => (
          <a
            onClick={() => null}
            key={link.name}
            href={link.link}
            className="decoration-dashed underline"
          >
            {link.name}
          </a>
        ))}
        <ResponsiveDialog type="imprint" />
        <ResponsiveDialog type="privacy" />
      </div>
    </div>
  );
};

export default Links;
