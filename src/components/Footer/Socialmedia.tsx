import { InstagramIcon } from "lucide-react";
import { socialmedia } from "../../data/data.json";

const Socialmedia = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold">Socialmedia</h3>
      <a href={socialmedia.instagram} rel="noopener noreferrer" target="_blank">
        <InstagramIcon size="3em" />
      </a>
    </div>
  );
};

export default Socialmedia;
