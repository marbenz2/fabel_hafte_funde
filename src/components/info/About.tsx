import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

const About = () => {
  return (
    <>
      <Container id="about" className="text-primary/60 grid-cols-5">
        <div className="order-2 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
          <Heading2>Über mich</Heading2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis culpa id quos, quibusdam officiis exercitationem
            dolorem iure molestias minima dolore voluptas nostrum quae
            cupiditate, at, labore error illum natus? Iste! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Amet, fugiat vero aperiam
            nobis corporis ea ad nemo nulla optio facilis voluptas veniam
            placeat accusamus quaerat praesentium minus. Eaque, perspiciatis
            officia! Illo quia reiciendis quas aliquam animi modi impedit optio
            iste ipsa culpa? Architecto rem doloribus sequi tenetur illum nobis
            ea velit! Harum velit aliquam eligendi itaque sunt ullam, id
            dolores! Sunt accusamus assumenda et ab!
          </Paragraph>
        </div>
        <img
          className="order-1 col-span-5 lg:col-span-2 max-h-[640px] h-full w-full object-cover"
          src="/about.webp"
          alt="test"
        />
      </Container>
    </>
  );
};

export default About;
