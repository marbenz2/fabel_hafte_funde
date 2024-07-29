import { ResponsiveDialog } from "../ResponsiveDialog";

import { company } from "../../data/data.json";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="flex flex-col max-w-2xl w-full gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          {company.sloganTitle}
        </h2>
        <p className="text-primary/80 text-md md:text-xl font-semibold">
          {company.sloganText}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <ResponsiveDialog type="contact">
          <Button
            variant="default"
            className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out"
          >
            Kontakt
          </Button>
        </ResponsiveDialog>
        <ResponsiveDialog type="openings">
          <Button
            variant="outline"
            className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out"
          >
            Öffnungszeiten
          </Button>
        </ResponsiveDialog>
      </div>
    </div>
  );
};

export default CallToAction;
