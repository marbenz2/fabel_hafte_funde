import { useMediaQuery } from "@/hooks/use-media-query";

import { DesktopNavButtons, MobileNavMenuButton } from "./ui/nav-buttons";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  HomeIcon,
  MailIcon,
  MessageSquareHeartIcon,
  ShirtIcon,
} from "lucide-react";

import { links } from "@/data/data.json";

export function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DesktopNavButtons className="flex w-fit self-center">
        {links.map((link) => (
          <Button key={link.name} variant="rounded" size="rounded">
            <a href={link.link}>
              {link.name === "Home" && <HomeIcon stroke="white" size="2em" />}
              {link.name === "Kollektionen" && (
                <ShirtIcon stroke="white" size="2em" />
              )}
              {link.name === "Instagram" && (
                <MessageSquareHeartIcon stroke="white" size="2em" />
              )}
              {link.name === "Kontakt" && (
                <MailIcon stroke="white" size="2em" />
              )}
            </a>
          </Button>
        ))}
      </DesktopNavButtons>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <MobileNavMenuButton className="flex self-end" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex w-full h-full bg-background-accent justify-center"
      >
        <SheetTitle hidden>Mobile Navigation</SheetTitle>
        <SheetDescription hidden>Menu</SheetDescription>
        <SheetTrigger className="flex flex-col gap-8 mt-8 w-2/3 items-start">
          {links.map((link) => (
            <Button
              key={link.name}
              variant="rounded"
              size="rounded"
              className="w-full"
            >
              <a key={link.name} href={link.link} className="text-secondary">
                {link.name}
              </a>
            </Button>
          ))}
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
}
