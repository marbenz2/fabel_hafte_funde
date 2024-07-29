import { useEffect, useState } from "react";
import { fetchPayloadFromApi } from "../../lib/utils";
import { PayloadApiResponse } from "../../types";
import { Spinner } from "../Spinner";
import { Container } from "../ui/container";
import { CollectionCard } from "./CollectionCard";
import { ResponsiveDialog } from "../ResponsiveDialog";

const Collection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState<PayloadApiResponse>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await fetchPayloadFromApi();
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
    <Container id="collection" className="w-full px-0 max-w-7xl">
      <h2 className="text-7xl font-allura mb-12">Kollektionen</h2>
      {isLoading && <Spinner className="self-center" />}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isLoading && !errorMessage && posts && posts.docs.length === 0 && (
        <div className="flex w-full justify-center">
          <p>Keine Einträge.</p>
        </div>
      )}
      {!isLoading && !errorMessage && posts && posts.docs.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {posts.docs.map((post) => (
            <ResponsiveDialog key={post.id} data={post}>
              <button>
                <CollectionCard post={post} />
              </button>
            </ResponsiveDialog>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Collection;
