import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { PayloadDocument } from "@/types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

const CollectionCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { post: PayloadDocument }
>(({ className, post, ...props }, ref) => (
  <Card
    className={cn("border-none rounded-none h-full", className)}
    ref={ref}
    {...props}
  >
    <CardHeader className="p-0">
      <img
        src={import.meta.env.VITE_BACKEND_URL + post.image.sizes.card.url}
        alt={post.image.alt}
        className="w-full h-fit object-cover"
      />
    </CardHeader>
    <CardContent className="p-2 text-start">
      <h2 className="font-semibold">{post.itemName}</h2>
      <p className="text-sm text-primary/80">{post.shortDescription}</p>
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
  </Card>
));
CollectionCard.displayName = "CollectionCard";

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
          className="max-w-[200px] md:max-w-[400px] w-full h-fit object-cover"
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

export { CollectionCard, CollectionCardDetails };
