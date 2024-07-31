import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Openings } from "./Openings";
import { Contact } from "./Contact";
import Imprint from "./Imprint";
import Privacy from "./Privacy";

import { pages } from "../data/data.json";
import { PayloadDocument } from "@/types";
import { CollectionCardDetails } from "./collection/CollectionCard";

export function ResponsiveDialog({
  children,
  data,
  type,
}: {
  children: React.ReactNode;
  data?: PayloadDocument;
  type?: "openings" | "contact" | "imprint" | "privacy";
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  let config = null;
  if (type) {
    config = pages[type];
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent
          className={`max-w-6xl ${
            (type === "openings" || type === "contact") && "max-w-fit"
          } p-8 w-full`}
        >
          <DialogHeader>
            <DialogTitle>{data ? data.itemName : config?.title}</DialogTitle>
            <DialogDescription className="whitespace-pre-wrap">
              {data ? data.shortDescription : config?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex w-full justify-center mt-8">
            {data ? (
              <CollectionCardDetails post={data} />
            ) : type === "openings" ? (
              <Openings />
            ) : type === "contact" ? (
              <Contact />
            ) : type === "imprint" ? (
              <Imprint />
            ) : type === "privacy" ? (
              <Privacy />
            ) : null}
          </div>
          <DialogClose asChild>
            <div className="flex w-full items-center justify-end">
              <Button className="w-fit">Schließen</Button>
            </div>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{config?.title}</DrawerTitle>
          <DrawerDescription>{config?.description}</DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center px-4 my-8">
          {data ? (
            <CollectionCardDetails post={data} />
          ) : type === "openings" ? (
            <Openings />
          ) : type === "contact" ? (
            <Contact />
          ) : type === "imprint" ? (
            <Imprint />
          ) : type === "privacy" ? (
            <Privacy />
          ) : null}
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Schließen</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
