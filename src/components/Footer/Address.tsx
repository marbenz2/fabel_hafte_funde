import { ExternalLinkIcon, HouseIcon } from "lucide-react";

import { address, company, maps } from "../../data/data.json";

const Address = () => {
  return (
    <div className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
      <div className="flex flex-col w-fit gap-2">
        <h3 className="text-xl font-semibold">Adresse</h3>
        <div className="flex gap-4">
          <HouseIcon size="3em" />
        </div>
        <div>
          <p>{company.title}</p>
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
    </div>
  );
};

export default Address;
