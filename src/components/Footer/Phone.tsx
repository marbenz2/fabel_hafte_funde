import { PhoneIcon } from "lucide-react";
import { address } from "../../data/data.json";

const Phone = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold">Telefon</h3>
      <a href={`tel:${address.phone.mobile}`} className="flex gap-2">
        <div className="flex gap-4">
          <PhoneIcon size="3em" />
        </div>
        <p className="text-2xl sm:text-4xl">{address.phone.mobile}</p>
      </a>
    </div>
  );
};

export default Phone;
