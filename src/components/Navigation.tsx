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
import { useScrollQuery } from "@/hooks/use-scroll-query";

export function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1536px)");
  const padding =
    isLargeDesktop && isDesktop ? 12 : !isLargeDesktop && isDesktop ? 4 : 3;
  const isScrolled = useScrollQuery(padding);

  if (isDesktop) {
    return (
      <DesktopNavButtons
        className={`sticky top-6 mx-auto p-4 px-12 flex rounded-full w-fit ${
          isScrolled && "bg-white/40 backdrop-blur-md"
        }`}
      >
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
        <MobileNavMenuButton
          className={`sticky top-4 mx-auto p-4 px-12 flex md:hidden justify-center ${
            isScrolled && "bg-white/40 backdrop-blur-md rounded-2xl"
          }`}
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-full bg-background-accent/60 backdrop-blur-md"
      >
        <SheetTitle hidden>Mobile Navigation</SheetTitle>
        <SheetDescription hidden>Menu</SheetDescription>
        <SheetTrigger className="flex flex-col justify-around w-full h-full items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-xl font-semibold"
            >
              {link.name}
            </a>
          ))}
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
}
