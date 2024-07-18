import { MailIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex w-fit gap-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="p-4 bg-primary w-fit rounded-full">
          <PhoneIcon stroke="white" />
        </div>
        <h2 className="font-semibold">Telefon</h2>
        <a
          href="tel:+49 1234 5678901"
          className="text-sm decoration-dashed underline"
        >
          +49 1234 5678901
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="p-4 bg-primary w-fit rounded-full">
          <MailIcon stroke="white" />
        </div>
        <h2 className="font-semibold">E-Mail</h2>
        <a
          href="mailto:fabelhaftefunde@test.de"
          className="text-sm decoration-dashed underline"
        >
          fabelhaftefunde@test.de
        </a>
      </div>
    </div>
  );
};

export default Contact;
