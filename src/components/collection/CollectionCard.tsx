import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { PayloadDocument } from "@/types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";

const CollectionCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    post: PayloadDocument;
  }
>(({ className, post, ...props }, ref) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Card
      className={cn("border-none rounded-none h-[320px] w-[250px]", className)}
      ref={ref}
      {...props}
    >
      <CardContent className="p-0">
        {isImageLoading && (
          <Skeleton className="h-[320px] w-[250px] rounded-none" />
        )}

        <img
          src={import.meta.env.VITE_BACKEND_URL + post.image.sizes.card.url}
          alt={post.image.alt}
          className={`h-full w-full object-cover ${
            isImageLoading ? "hidden" : ""
          }`}
          onLoad={() => setIsImageLoading(false)}
        />
      </CardContent>
    </Card>
  );
});
CollectionCard.displayName = "CollectionCard";

const CollectionCardHighlight = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    post: PayloadDocument;
  }
>(({ className, post, ...props }, ref) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Card
      className={cn("border-none rounded-none h-full", className)}
      ref={ref}
      {...props}
    >
      <CardHeader className="p-0">
        {isImageLoading && (
          <Skeleton className="h-full lg:h-[calc(640px)] w-full lg:w-[480px] rounded-none"></Skeleton>
        )}

        <img
          src={import.meta.env.VITE_BACKEND_URL + post.image.sizes.card.url}
          alt={post.image.alt}
          className={`max-h-[640px] h-full w-full object-cover ${
            isImageLoading ? "hidden" : ""
          }`}
          onLoad={() => setIsImageLoading(false)}
        />
      </CardHeader>
    </Card>
  );
});
CollectionCardHighlight.displayName = "CollectionCardHighlight";

const CollectionCardDetails = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { post: PayloadDocument }
>(({ className, post, ...props }, ref) => (
  <ScrollArea className="h-[550px] w-full">
    <Card
      className={cn("flex md:flex-row border-none rounded-none", className)}
      ref={ref}
      {...props}
    >
      <CardHeader className="p-0 items-center md:items-start">
        <img
          src={import.meta.env.VITE_BACKEND_URL + post.image.sizes.card.url}
          alt={post.image.alt}
          className="max-w-[200px] md:max-w-[400px] w-full h-fit object-cover border"
        />
      </CardHeader>
      <div className="flex flex-col flex-1">
        <CardContent className="flex flex-col p-2 pl-4 text-start gap-2">
          {post.condition && (
            <div className="text-lg">
              <p className="font-semibold">Zustand:</p>
              <p className="text-sm text-primary/80">{post.condition}</p>
            </div>
          )}
          {post.size && (
            <div className="text-lg">
              <p className="font-semibold">Kleidergröße:</p>
              <p className="text-sm text-primary/80">
                {post.size.toUpperCase()}
              </p>
            </div>
          )}
          <div className="text-lg">
            <p className="font-semibold">Beschreibung:</p>
            <p className="text-sm text-primary/80">
              {post.detailedDescription}
            </p>
          </div>
        </CardContent>
        <CardFooter className="h-full items-end justify-end p-2">
          {post.price && (
            <p className="font-semibold">
              {post.price.toLocaleString("default", {
                style: "currency",
                currency: "EUR",
              })}
            </p>
          )}
        </CardFooter>
      </div>
    </Card>
  </ScrollArea>
));
CollectionCardDetails.displayName = "CollectionCardDetails";

export { CollectionCard, CollectionCardHighlight, CollectionCardDetails };
