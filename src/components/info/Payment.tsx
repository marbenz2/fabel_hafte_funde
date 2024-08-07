import { CreditCardIcon, HandCoinsIcon, SmartphoneNfcIcon } from "lucide-react";
import { Container } from "../ui/container";
import { Heading2, Paragraph } from "../ui/text-formatter";

const Payment = () => {
  return (
    <>
      <Container id="payment" className="text-primary/60 grid-cols-5">
        <div className="order-2 col-span-full lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
          <Heading2>Zahlungsarten</Heading2>
          <div className="flex gap-4 py-2 justify-center lg:justify-start">
            <div className="flex flex-col w-fit items-center">
              <HandCoinsIcon stroke="black" size="3em" />
              <Paragraph className="text-center leading-normal">
                Barzahlung
              </Paragraph>
            </div>
            <div className="flex flex-col w-fit items-center">
              <CreditCardIcon stroke="black" size="3em" />
              <Paragraph className="text-center leading-normal">
                Kartenzahlung
              </Paragraph>
            </div>
            <div className="flex flex-col w-fit items-center">
              <SmartphoneNfcIcon stroke="black" size="3em" />
              <Paragraph className="text-center leading-normal">
                Kontaktloses Bezahlen
              </Paragraph>
            </div>
          </div>
        </div>
        <img
          className="order-1 col-span-full lg:col-span-2 max-h-[640px] h-full w-full object-cover"
          src="/cash-register.webp"
          alt="test"
        />
      </Container>
    </>
  );
};

export default Payment;
