import { MailIcon, PhoneIcon } from "lucide-react";

import { address } from "../data/data.json";

const Contact = () => {
  return (
    <div className="flex w-fit gap-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="p-4 bg-primary w-fit rounded-full">
          <PhoneIcon stroke="white" />
        </div>
        <h2 className="font-semibold">Telefon</h2>
        <a
          href={`tel:${address.phone}`}
          className="text-sm decoration-dashed underline"
        >
          {address.phone}
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="p-4 bg-primary w-fit rounded-full">
          <MailIcon stroke="white" />
        </div>
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

export default Contact;
