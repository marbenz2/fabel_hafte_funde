import { useEffect, useState } from "react";
import { fetchArtikelFromApi } from "./lib/utils";
import { ApiResponse } from "./types";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState<ApiResponse>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await fetchArtikelFromApi();
        setPosts(response);
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
      <h1 className="text-3xl font-bold">Fabelhafte Funde</h1>
      {isLoading && <p>Loading Data...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isLoading && !errorMessage && posts && posts.docs.length > 0 && (
        <ul>
          {posts.docs.map((post) => (
            <li key={post.id}>
              <img
                src={
                  import.meta.env.VITE_BACKEND_URL + post.image.sizes.card.url
                }
                alt={post.image.alt}
              />
              <h2 className="text-2xl">{post.itemName}</h2>
              <p>{post.description}</p>
              <p>
                {post.price.toLocaleString("default", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
