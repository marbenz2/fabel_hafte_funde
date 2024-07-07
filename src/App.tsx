import { useEffect, useState } from "react";
import { fetchArtikelFromApi } from "./lib/utils";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await fetchArtikelFromApi();
        console.log("test: ", response);
        console.log("test");
        setArtikel(response);
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage("Unbekannter Fehler");
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      <ul>
        {artikel.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
