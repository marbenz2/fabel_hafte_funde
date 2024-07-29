import { RecycleIcon } from "lucide-react";

import { sustainability } from "../../data/data.json";

const Sustainability = () => {
  return (
    <div className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Nachhaltigkeit</h3>
        <div className="flex gap-4">
          <RecycleIcon size="3em" />
        </div>
        <p>{sustainability.text}</p>
      </div>
    </div>
  );
};

export default Sustainability;
