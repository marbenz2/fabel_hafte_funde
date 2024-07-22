import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
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

export function ResponsiveDialog({ type }: { type: "openings" | "contact" }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant={type === "openings" ? "outline" : "default"}
            className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out"
          >
            {type === "openings" ? "Öffnungszeiten" : "Kontakt"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-background-muted">
          <DialogDescription></DialogDescription>
          <DialogHeader>
            <DialogTitle>
              {type === "openings" ? "Öffnungszeiten" : "Kontaktdaten"}
            </DialogTitle>
            <DialogDescription>
              {type === "openings"
                ? "Unsere Öffnungszeiten im Überblick: Für die Annahme von Kleidung und/oder Spielzeug bitte vorher anrufen und einen Termin vereinbaren."
                : "Unsere Kontaktdaten: Wir freuen uns auf Ihre Anfrage!"}
            </DialogDescription>
          </DialogHeader>
          <div className="flex w-full justify-center my-8">
            {type === "openings" && <Openings />}
            {type === "contact" && <Contact />}
            {type === undefined || (null && <p>Error</p>)}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant={type === "openings" ? "outline" : "default"}
          className="w-full sm:w-fit px-16 py-6 transition-colors duration-300 ease-in-out"
        >
          {type === "openings" ? "Öffnungszeiten" : "Kontakt"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className=" bg-background-muted">
        <DrawerHeader className="text-left">
          <DrawerTitle>
            {type === "openings" ? "Öffnungszeiten" : "Kontaktdaten"}
          </DrawerTitle>
          <DrawerDescription>
            {type === "openings"
              ? "Unsere Öffnungszeiten im Überblick: Für die Annahme von Kleidung und/oder Spielzeug bitte vorher anrufen und einen Termin vereinbaren."
              : "Unsere Kontaktdaten: Wir freuen uns auf Ihre Anfrage!"}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center px-4 my-8">
          {type === "openings" && <Openings />}
          {type === "contact" && <Contact />}
          {type === undefined || (null && <p>Error</p>)}
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
