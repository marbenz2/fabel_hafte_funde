import { company } from "../../data/data.json";

const Logo = () => {
  return (
    <div className="relative flex flex-col w-full h-fit -rotate-3 font-allura">
      <h1 className="text-7xl xs:text-8xl md:text-9xl lg:text-10xl drop-shadow-lg">
        {company.title}
      </h1>
      <p className="absolute -bottom-3 left-0 text-xl md:text-2xl">
        by {company.owner}
      </p>
    </div>
  );
};

export default Logo;
