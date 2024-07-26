import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

import { MenuIcon } from "lucide-react";

const DesktopNavButtons = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "hidden md:flex w-full justify-between md:justify-center gap-0 md:gap-24 z-50",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
DesktopNavButtons.displayName = "DesktopNavButtons";

const MobileNavMenuButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    <Button variant="rounded" size="rounded">
      <MenuIcon stroke="white" size="1.5em" />
    </Button>
  </div>
));
MobileNavMenuButton.displayName = "MobileNavMenuButton";

export { DesktopNavButtons, MobileNavMenuButton };
