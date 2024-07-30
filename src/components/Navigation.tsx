import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

import { NavLinks, NavMenuButtonMobile } from "./ui/nav-buttons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { InstagramIcon, MailIcon } from "lucide-react";

import { links } from "@/data/data.json";

const NavigationContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <nav
    className={cn(
      "sticky lg:fixed top-0 grid grid-cols-4 w-full gap-4 px-4 md:px-8 py-2 md:py-8 bg-primary-foreground/90 drop-shadow-md backdrop-blur-sm z-50",
      className
    )}
  >
    <div className="col-span-2 md:col-span-1 flex items-center">
      <h1 className="font-allura text-3xl md:text-4xl">Fabelhafte Funde</h1>
    </div>
    {children}
    <div className="col-span-1 flex gap-4 items-center justify-end">
      <InstagramIcon />
      <MailIcon />
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
