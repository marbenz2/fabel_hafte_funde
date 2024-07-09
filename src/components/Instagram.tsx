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
        console.log(response);
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
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2">
          {feeds.data.map((feed) => (
            <Card key={feed.id} className="border-none">
              <CardContent className="relative p-0">
                {feed.media_type === "IMAGE" && (
                  <img
                    src={feed.media_url}
                    alt={feed.caption}
                    className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                )}
                <p
                  className={`absolute bg-white/40 p-2 w-full bottom-0 left-0 text-sm md:text-md`}
                >
                  {feed.caption}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Instagram;
