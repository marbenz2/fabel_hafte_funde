import { MailIcon, PhoneIcon } from "lucide-react";

import { address } from "../data/data.json";
import { Button } from "./ui/button";
import { ResponsiveDialog } from "./ResponsiveDialog";

const ContactButton = () => {
  return (
    <ResponsiveDialog type="contact">
      <Button
        variant="outline"
        className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out "
      >
        Kontakt
      </Button>
    </ResponsiveDialog>
  );
};

const Contact = () => {
  return (
    <div className="flex w-fit gap-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <Button variant="rounded" size="rounded">
          <PhoneIcon stroke="white" />
        </Button>
        <h2 className="font-semibold">Telefon</h2>
        <a
          href={`tel:${address.phone.mobile}`}
          className="text-sm decoration-dashed underline"
        >
          {address.phone.mobile}
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Button variant="rounded" size="rounded">
          <MailIcon stroke="white" />
        </Button>
        <h2 className="font-semibold">E-Mail</h2>
        <a
          href={`mailto:${address.email}`}
          className="text-sm decoration-dashed underline"
        >
          {address.email}
        </a>
      </div>
    </div>
  );
};

export { Contact, ContactButton };
