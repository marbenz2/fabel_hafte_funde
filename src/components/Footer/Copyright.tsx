import { creator } from "../../data/data.json";

const Copyright = () => {
  return (
    <section className="flex flex-col py-4 px-4 lg:px-12 xl:flex-row xl:justify-center xl:gap-2">
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a
          href={creator.link}
          rel="noopener noreferrer"
          target="_blank"
          className="decoration-dashed underline"
        >
          {creator.name}.
        </a>
      </p>
      <p>All rights reserved.</p>
    </section>
  );
};

export default Copyright;
