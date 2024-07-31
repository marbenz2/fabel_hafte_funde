import { useEffect, useState } from "react";
import { fetchInstagramFromApi } from "../lib/utils";
import { InstagramApiResponse } from "../types";
import { Card, CardContent } from "./ui/card";
import { Container } from "./ui/container";
import { Heading2, Paragraph } from "./ui/text-formatter";
import { Skeleton } from "./ui/skeleton";
import { InstagramIcon } from "lucide-react";

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
    <Container id="instagram" className="text-primary/60 grid-cols-5">
      <div className="order-1 lg:order-1 col-span-5 lg:col-span-3 flex flex-col w-full h-full justify-center gap-8 py-32 px-4 lg:px-8 xl:px-12 2xl:px-32">
        <Heading2>Instagram</Heading2>
        {isLoading && <Skeleton className="h-4 w-[150px] self-center" />}
        {errorMessage && <p>Error: {errorMessage}</p>}
        {!isLoading && !errorMessage && feeds && feeds.data.length > 0 && (
          <Paragraph className="self-center lg:self-start">
            <a
              href={`https://www.instagram.com/${feeds.data[0].username}/`}
              className="flex w-fit items-center gap-2 text-xl"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon size="2rem" />
              {feeds.data[0].username}
            </a>
          </Paragraph>
        )}
      </div>
      <div className="order-2 lg:order-2 col-span-5 lg:col-span-2">
        {isLoading && <Skeleton className="h-[640px] w-full rounded-none" />}
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
      </div>
    </Container>
  );
};

export default Instagram;
