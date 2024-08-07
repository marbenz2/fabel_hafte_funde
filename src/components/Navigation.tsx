import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

import { NavLinks, NavMenuButtonMobile } from "./ui/nav-buttons";
import { Heading1 } from "./ui/text-formatter";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";

import { links, socialmedia, address } from "@/data/data.json";

const NavigationContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <nav
    className={cn(
      "sticky lg:fixed top-0 grid grid-cols-4 w-full max-w-[2560px] gap-4 px-4 md:px-8 py-4 md:py-8 bg-primary-foreground/90 drop-shadow-md backdrop-blur-sm z-50",
      className
    )}
  >
    <div className="col-span-1 md:col-span-1 flex items-center">
      <Heading1>Fabelhafte Funde</Heading1>
    </div>
    {children}
    <div className="col-span-2 md:col-span-1 flex gap-4 lg:gap-8 items-center justify-end">
      <a href={socialmedia.instagram} rel="noopener noreferrer" target="_blank">
        <InstagramIcon />
      </a>
      <a href={`mailto:${address.email}`}>
        <MailIcon />
      </a>
      <a href={`tel:${address.phone.mobile}`}>
        <PhoneIcon />
      </a>
    </div>
  </nav>
);

export function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <NavigationContainer>
        <div className="col-span-2 flex flex-wrap justify-center items-center w-full gap-8">
          {links.map((link) => (
            <NavLinks key={link.name} href={link.link}>
              {link.name.toUpperCase()}
            </NavLinks>
          ))}
        </div>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <div className="col-span-1 flex justify-center items-center order-last">
        <Sheet>
          <SheetTrigger
            asChild
            className="flex w-full h-full items-center justify-end"
          >
            <NavMenuButtonMobile />
          </SheetTrigger>
          <SheetContent side="top" className="flex w-full justify-center">
            <SheetTitle hidden>Mobile Navigation</SheetTitle>
            <SheetDescription hidden>Menu</SheetDescription>
            <SheetTrigger className="flex flex-col items-center gap-8 my-8">
              {links.map((link) => (
                <NavLinks key={link.name} href={link.link}>
                  {link.name.toUpperCase()}
                </NavLinks>
              ))}
            </SheetTrigger>
          </SheetContent>
        </Sheet>
      </div>
    </NavigationContainer>
  );
}
