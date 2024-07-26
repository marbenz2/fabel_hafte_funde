import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
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
import Openings from "./Openings";
import Contact from "./Contact";
import Imprint from "./Imprint";
import Privacy from "./Privacy";

import { pages } from "../data/data.json";

export function ResponsiveDialog({
  type,
}: {
  type: "openings" | "contact" | "imprint" | "privacy";
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const config = pages[type];

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {type === "openings" || type === "contact" ? (
            <Button
              variant={config.type as ButtonProps["variant"]}
              className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out"
            >
              {config.title}
            </Button>
          ) : type === "imprint" || type === "privacy" ? (
            <button className="decoration-dashed underline">
              {config.title}
            </button>
          ) : null}
        </DialogTrigger>
        <DialogContent className="max-w-2xl p-8 w-fit bg-background-muted">
          <DialogHeader>
            <DialogTitle>{config.title}</DialogTitle>
            <DialogDescription>{config.description}</DialogDescription>
          </DialogHeader>
          <div className="flex w-full justify-center mt-8">
            {type === "openings" ? (
              <Openings />
            ) : type === "contact" ? (
              <Contact />
            ) : type === "imprint" ? (
              <Imprint />
            ) : type === "privacy" ? (
              <Privacy />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {type === "openings" || type === "contact" ? (
          <Button
            variant={config.type as ButtonProps["variant"]}
            className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out"
          >
            {config.title}
          </Button>
        ) : type === "imprint" || type === "privacy" ? (
          <button className="decoration-dashed underline">
            {config.title}
          </button>
        ) : null}
      </DrawerTrigger>
      <DrawerContent className=" bg-background-muted">
        <DrawerHeader className="text-left">
          <DrawerTitle>{config.title}</DrawerTitle>
          <DrawerDescription>{config.description}</DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center px-4 my-8">
          {type === "openings" ? (
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
            <Button variant="outline">Schließen</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
