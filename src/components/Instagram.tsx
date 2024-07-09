import { useEffect, useState } from "react";
import { fetchFromApi } from "../lib/utils";
import { InstagramApiResponse } from "../types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Spinner } from "./Spinner";
import { Container } from "./ui/container";

const Instagram = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [feeds, setFeeds] = useState<InstagramApiResponse>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await fetchFromApi();
        setFeeds(response);
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
      <h2 className="text-7xl font-allura">Instagram</h2>
      {isLoading && <Spinner className="self-center" />}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isLoading && !errorMessage && feeds && feeds.data.length > 0 && (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {feeds.data.map((feed) => (
            <Card key={feed.id} className="">
              <CardHeader className="p-0">
                <img
                  src={import.meta.env.VITE_BACKEND_URL + feed.media_url}
                  alt={feed.caption}
                  className="w-full h-[400px] object-cover"
                />
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-md">{feed.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Instagram;
