import { useEffect, useState } from "react";
import { fetchInstagramFromApi } from "../lib/utils";
import { InstagramApiResponse } from "../types";
import { Card, CardContent } from "./ui/card";
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
        const response = await fetchInstagramFromApi();
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
    <Container id="instagram" className="max-w-7xl px-0">
      <h2 className="text-7xl font-allura mb-12">Instagram</h2>
      {isLoading && <Spinner className="self-center" />}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isLoading && !errorMessage && feeds && feeds.data.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {feeds.data.map((feed) => (
            <a
              key={feed.id}
              href={feed.permalink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Card className="border-none rounded-none">
                <CardContent className="relative p-0">
                  {feed.media_type === "IMAGE" ? (
                    <img
                      src={feed.media_url}
                      alt={feed.caption}
                      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  ) : (
                    <p className="flex w-full h-[400px] items-center justify-center border">
                      {feed.media_type} Not supported yet.
                    </p>
                  )}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Instagram;
