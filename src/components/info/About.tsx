import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

const About = () => {
  return (
    <>
      <Container className="text-primary/60 grid-cols-5">
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
            dolores! Sunt accusamus assumenda et ab! Illum aspernatur hic
            expedita, eaque voluptas nulla quod consequuntur voluptatum quae
            aliquam nemo sunt corporis natus perferendis magnam libero iure
            distinctio explicabo corrupti, nam numquam? Voluptas doloremque
            possimus id, adipisci, expedita minus repellendus quaerat
            consectetur beatae perferendis, odit alias nihil repellat est? Enim
            adipisci, voluptates voluptatibus iste ut aliquam qui corporis
            dignissimos sunt, alias voluptatum.
          </Paragraph>
        </div>
        <img
          className="order-1 col-span-5 lg:col-span-2 max-h-[640px] h-full w-full object-cover"
          src="https://picsum.photos/1280/1280"
          alt="test"
        />
      </Container>
    </>
  );
};

export default About;
