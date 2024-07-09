import { useEffect, useState } from "react";
import { fetchFromApi } from "../lib/utils";
import { PayloadApiResponse } from "../types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Spinner } from "./Spinner";
import { Container } from "./ui/container";

const Collection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState<PayloadApiResponse>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await fetchFromApi();
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
    <Container className="max-w-7xl">
      <h2 className="text-7xl font-allura">Neuheiten</h2>
      {isLoading && <Spinner className="self-center" />}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isLoading && !errorMessage && posts && posts.docs.length > 0 && (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {posts.docs.map((post) => (
            <Card key={post.id} className="">
              <CardHeader className="p-0">
                <img
                  src={
                    import.meta.env.VITE_BACKEND_URL + post.image.sizes.card.url
                  }
                  alt={post.image.alt}
                  className="w-full h-[400px] object-cover"
                />
              </CardHeader>
              <CardContent>
                <h2 className="text-md md:text-xl font-semibold">
                  {post.itemName}
                </h2>
                <p className="text-sm md:text-md">{post.description}</p>
              </CardContent>
              <CardFooter className="h-full items-end justify-end">
                <p className="font-semibold">
                  {post.price.toLocaleString("default", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Collection;
