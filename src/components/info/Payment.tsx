import { CreditCardIcon, HandCoinsIcon, SmartphoneNfcIcon } from "lucide-react";
import { Container } from "../ui/container";
import { Heading2 } from "../ui/text-formatter";

const Payment = () => {
  return (
    <>
      <Container className="text-primary/60 grid-cols-5">
        <div className="order-2 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
          <Heading2>Zahlungsarten</Heading2>
          <div className="flex gap-4 py-2 justify-center lg:justify-start">
            <div className="flex flex-col w-fit items-center justify-center">
              <HandCoinsIcon size="3em" />
              <p>Barzahlung</p>
            </div>
            <div className="flex flex-col w-fit items-center justify-center">
              <CreditCardIcon size="3em" />
              <p>Kartenzahlung</p>
            </div>
            <div className="flex flex-col w-fit items-center justify-center">
              <SmartphoneNfcIcon size="3em" />
              <p>Kontaktloses Bezahlen</p>
            </div>
          </div>
        </div>
        <img
          className="order-1 col-span-5 lg:col-span-2 max-h-[640px] h-full w-full object-cover"
          src="/payment.webp"
          alt="test"
        />
      </Container>
    </>
  );
};

export default Payment;
