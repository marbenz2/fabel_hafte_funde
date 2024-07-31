import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

import { address, company } from "@/data/data.json";

const Introduction = () => {
  return (
    <>
      <Container className="text-primary/60 grid-cols-5">
        <div className="order-1 lg:order-1 lg:col-start-2 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4">
          <Heading2 className="lg:self-center text-center">
            {company.title}
          </Heading2>
          <Paragraph className="text-center">
            Herzlich Willkommen bei {company.title}, Ihrem charmanten
            Second-Hand-Shop für Kleidung und Kinderspielzeug in {address.city}!
            Bei uns finden Sie liebevoll ausgewählte, gut erhaltene Stücke für
            Groß und Klein. Unser Sortiment umfasst modische Kleidung für
            Erwachsene und Kinder sowie eine Vielzahl an Spielzeugen, die
            kleinen Entdeckern große Freude bereiten. Kommen Sie vorbei und
            entdecken Sie nachhaltige Schnäppchen, die nicht nur Ihren
            Geldbeutel, sondern auch die Umwelt schonen. Wir freuen uns auf
            Ihren Besuch!
          </Paragraph>
        </div>
      </Container>
    </>
  );
};

export default Introduction;
