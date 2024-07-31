import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

const Commission = () => {
  return (
    <>
      <Container className="text-primary/60 grid-cols-5">
        <div className="order-2 lg:order-1 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
          <Heading2>Annahme</Heading2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            soluta ullam dolor atque praesentium beatae saepe non quaerat quasi.
            Eius error quaerat natus, nam repudiandae voluptatem blanditiis
            dicta quisquam? Quia. Voluptatibus repellendus eius nam, dicta,
            perferendis cumque maxime enim aut quae quo voluptatum, eaque culpa
            sit eum. Cupiditate deleniti sunt accusantium necessitatibus odio
            commodi illo dolore, sint beatae qui vitae! Impedit distinctio eius
            magni illum commodi deleniti nesciunt delectus quisquam quo earum in
            repellendus laboriosam, non obcaecati placeat molestiae rerum,
            dolores sint animi cumque quasi dolor esse blanditiis? Doloribus,
            quia. Autem laborum reiciendis nihil distinctio eaque! Dolorum saepe
            suscipit molestiae eius dignissimos corrupti totam, ullam porro
            itaque eaque nobis iste beatae voluptas pariatur ut. Quia, eaque.
            Vitae repellendus magnam dicta? Maiores soluta quia exercitationem
            cupiditate quibusdam. Dolore quas dolores explicabo omnis
            consequatur? Sunt ipsa tenetur commodi ipsum itaque eligendi,
            officiis iusto iure quidem doloremque obcaecati debitis, porro
            perspiciatis, quia deleniti? Explicabo nobis cumque error quidem
            molestiae officiis nesciunt libero fugiat, pariatur temporibus
            debitis ea modi inventore asperiores sint accusamus qui, quisquam
            laboriosam. Perferendis aspernatur labore tenetur, quod maiores
            provident harum.
          </Paragraph>
        </div>
        <img
          className="order-1 lg:order-2 col-span-5 lg:col-span-2 max-h-[640px] h-full w-full object-cover"
          src="https://picsum.photos/1280/1280"
          alt="test"
        />
      </Container>
    </>
  );
};

export default Commission;
