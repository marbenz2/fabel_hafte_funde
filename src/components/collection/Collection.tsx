import { useEffect, useState } from "react";
import { fetchPayloadFromApi } from "../../lib/utils";
import { PayloadApiResponse } from "../../types";
import { Container } from "../ui/container";
import { CollectionCard, CollectionCardHighlight } from "./CollectionCard";
import { ResponsiveDialog } from "../ResponsiveDialog";
import { Heading2, Paragraph } from "../ui/text-formatter";

const Collection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState<PayloadApiResponse>();
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

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

  useEffect(() => {
    if (posts && posts.docs.length > 0) {
      const randomIndex = Math.floor(Math.random() * posts.docs.length);
      setRandomIndex(randomIndex);
    }
  }, [posts]);

  return (
    <Container id="collection" className="text-primary/60 grid-cols-5">
      <div className="order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
        <Heading2>Kollektion</Heading2>
        <Paragraph>
          Entdecken Sie stilvolle Second-Hand-Kleidung für Damen und Kinder,
          sowie liebevoll gepflegte Kinderspielzeuge. Hochwertig, nachhaltig und
          preiswert – besuchen Sie uns und finden Sie Ihre neuen
          Lieblingsstücke! Schauen Sie sich hier einige Highlights unserer
          Kollektion an.
        </Paragraph>
      </div>
      <div className="flex order-1 col-span-full justify-center lg:justify-start lg:col-span-2">
        {errorMessage && <p>Error: {errorMessage}</p>}
        {!isLoading && !errorMessage && posts && posts.docs.length === 0 && (
          <div className="flex w-full justify-center">
            <p>Keine Einträge.</p>
          </div>
        )}
        {randomIndex &&
          !isLoading &&
          !errorMessage &&
          posts &&
          posts.docs.length > 0 && (
            <ResponsiveDialog key={randomIndex} data={posts.docs[randomIndex]}>
              <button>
                <CollectionCardHighlight post={posts.docs[randomIndex]} />
              </button>
            </ResponsiveDialog>
          )}
      </div>
      <div className="order-2 lg:order-3 col-span-full flex overflow-x-auto">
        {errorMessage && <p>Error: {errorMessage}</p>}
        {!isLoading && !errorMessage && posts && posts.docs.length === 0 && (
          <div className="flex w-full justify-center">
            <p>Keine Einträge.</p>
          </div>
        )}

        {!errorMessage && posts && posts.docs.length > 0 && (
          <div className="flex gap-2 p-2">
            {posts.docs.map((post) => (
              <ResponsiveDialog key={post.id} data={post}>
                <button>
                  <CollectionCard post={post} />
                </button>
              </ResponsiveDialog>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Collection;
