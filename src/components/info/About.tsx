import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

import { address, company } from "@/data/data.json";

const About = () => {
  return (
    <>
      <Container id="about" className="text-primary/60 grid-cols-5">
        <div className="order-2 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
          <Heading2>Über mich</Heading2>
          <Paragraph>
            Hallo und herzlich willkommen!
            <br />
            <br />
            Ich bin <span className="font-bold">{company.owner}</span>, stolze
            Mutter von zwei wunderbaren Kindern, glückliche Ehefrau und ab
            sofort auch stolze Besitzerin eines Secondhand-Ladens in{" "}
            {address.city}.
            <br />
            <br />
            Schon lange ärgere ich mich darüber, dass viel zu viel Neues gekauft
            und Altes einfach weggeworfen wird. Warum sollten wir unsere{" "}
            <span className="font-bold">fabelhaften Funde</span>, die anderen
            Menschen noch Freude bereiten könnten, einfach entsorgen? Genau das
            möchte ich ändern!
            <br />
            In meinem Secondhand-Laden für Damen- und Kindermode sowie
            Spielsachen findest du liebevoll ausgewählte Stücke, die nur darauf
            warten, ein zweites Leben zu beginnen. Hier darf gestöbert, entdeckt
            und gestaunt werden – immer mit dem guten Gefühl, etwas für die
            Umwelt zu tun und gegen die Wegwerfgesellschaft zu kämpfen.
            <br />
            <br />
            Also, komm vorbei und lass uns gemeinsam die Welt ein kleines
            bisschen nachhaltiger und bunter machen. Denn wer sagt, dass
            Secondhand nicht auch erste Wahl sein kann?
            <br />
            <br />
            Ich freue mich auf deinen Besuch!
            <br />
            <span className="font-bold">Herzliche Grüße, {company.owner}</span>
            <br />
            <br />
            <br />
            P.S. Kinder und Ehemänner sind herzlich eingeladen, mitzumachen –
            wer weiß, welche{" "}
            <span className="font-bold">fabelhaften Funde</span> wir noch
            gemeinsam entdecken!
          </Paragraph>
        </div>
        <img
          className="order-1 col-span-5 lg:col-span-2 h-full w-full object-cover"
          src="/about.webp"
          alt="test"
        />
      </Container>
    </>
  );
};

export default About;
