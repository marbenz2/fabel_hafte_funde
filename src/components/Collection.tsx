import { useEffect, useState } from "react";
import { fetchPayloadFromApi } from "../lib/utils";
import { PayloadApiResponse } from "../types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Spinner } from "./Spinner";
import { Container } from "./ui/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <Container id="collection" className="max-w-7xl w-full px-0">
      <h2 className="text-7xl font-allura mb-12">Kollektionen</h2>
      {isLoading && <Spinner className="self-center" />}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isLoading && !errorMessage && posts && posts.docs.length === 0 && (
        <div className="flex w-full justify-center">
          <p>Keine Einträge.</p>
        </div>
      )}
      {!isLoading && !errorMessage && posts && posts.docs.length > 0 && (
        <Carousel className="w-full">
          <CarouselContent className="">
            {posts.docs.map((post) => (
              <CarouselItem
                key={post.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="w-fit">
                  <CardHeader className="p-0">
                    <img
                      src={
                        import.meta.env.VITE_BACKEND_URL +
                        post.image.sizes.card.url
                      }
                      alt={post.image.alt}
                      className="w-1/2"
                    />
                  </CardHeader>
                  <CardContent className="p-2">
                    <h2 className="text-md md:text-xl font-semibold">
                      {post.itemName}
                    </h2>
                    <p className="text-sm md:text-md text-primary/80">
                      {post.description}
                    </p>
                  </CardContent>
                  <CardFooter className="h-full items-end justify-end p-2">
                    <p className="font-semibold">
                      {post.price.toLocaleString("default", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-top-8 left-0 bg-transparent" />
          <CarouselNext className="-top-8 right-0 bg-transparent" />
        </Carousel>
      )}
    </Container>
  );
};

export default Collection;
