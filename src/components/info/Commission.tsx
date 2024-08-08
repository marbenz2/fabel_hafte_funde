import { ContactButton } from "../Contact";
import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

const Commission = () => {
  return (
    <>
      <Container id="commission" className="text-primary/60 grid-cols-5">
        <div className="order-2 lg:order-1 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
          <Heading2>Warenannahme</Heading2>
          <Paragraph>
            Bieten Sie Ihre Kleidung bequem und stressfrei in unserem Laden in
            Tübingen zum Verkauf an. <br /> Stellen Sie sicher, dass Ihre
            Kleidung gewaschen und gebügelt ist, bevor Sie sie zu uns bringen.
            Wir übernehmen den Rest – von der ansprechenden Präsentation bis hin
            zum Verkauf. Ihre Artikel erreichen in den nächsten 3-4 Monaten
            viele potenzielle Käufer.
            <br />
            <span className="font-bold">
              Vertrauen Sie auf unsere Erfahrung und lassen Sie uns gemeinsam
              einen fairen Verkaufspreis erzielen!
            </span>
            <br />
            <br />
            Vereinbaren Sie jetzt einen Termin für ein persönliches Gespräch und
            die gemeinsame Durchsicht Ihrer Ware.
          </Paragraph>
          <ContactButton />
        </div>
        <img
          className="order-1 col-span-5 lg:col-span-2 h-full w-full object-cover"
          src="/commission2.webp"
          alt="test"
        />
      </Container>
    </>
  );
};

export default Commission;
