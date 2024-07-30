import { CreditCardIcon, HandCoinsIcon, SmartphoneNfcIcon } from "lucide-react";

const Payment = () => {
  return (
    <div className="flex bg-black/20 px-4 lg:px-12 py-4 justify-start xl:justify-center">
      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Zahlungsarten</h3>
        <div className="flex gap-4 py-2">
          <HandCoinsIcon size="3em" />
          <CreditCardIcon size="3em" />
          <SmartphoneNfcIcon size="3em" />
        </div>
      </section>
    </div>
  );
};

export default Payment;
