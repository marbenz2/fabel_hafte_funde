import { ScrollArea } from "./ui/scroll-area";

const Imprint = () => {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4 bg-card/25">
      <div className="text-sm space-y-4">
        <p className="leading-relaxed">
          Max Mustermann
          <br />
          Musterladen e.K.
          <br />
          Inhaber: Max Mustermann
          <br />
          Musterstraße 111
          <br />
          Gebäude 44
          <br />
          90210 Musterstadt
        </p>

        <p className="leading-relaxed">
          Handelsregister: HRB 999999
          <br />
          Registergericht: Amtsgericht Musterstadt
        </p>

        <h2 className="text-lg font-semibold mt-4">Kontakt</h2>
        <p className="leading-relaxed">
          Telefon: +49 (0) 123 44 55 66
          <br />
          Telefax: +49 (0) 123 44 55 99
          <br />
          E-Mail:{" "}
          <a
            href="mailto:mustermann@musterfirma.de"
            className="underline decoration-dashed"
          >
            mustermann@musterfirma.de
          </a>
        </p>

        <h2 className="text-lg font-semibold mt-4">Umsatzsteuer-ID</h2>
        <p className="leading-relaxed">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE999999999
        </p>

        <h2 className="text-lg font-semibold mt-4">
          Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </h2>
        <p className="leading-relaxed">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p className="leading-relaxed">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            className="underline decoration-dashed"
          >
            eRecht24
          </a>
        </p>
      </div>
    </ScrollArea>
  );
};

export default Imprint;
