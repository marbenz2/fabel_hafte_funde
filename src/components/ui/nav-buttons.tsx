import * as React from "react";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

const NavLinks = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, href, ...props }, ref) => (
  <a
    ref={ref}
    href={href}
    className={cn(
      "text-lg font-thin hover:text-orange-300 transition-colors ease-in-out",
      className
    )}
    {...props}
  />
));
NavLinks.displayName = "NavLinks";

const NavMenuButtonMobile = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={cn(className)} {...props}>
    <MenuIcon />
  </button>
));
NavMenuButtonMobile.displayName = "NavMenuButtonMobile";

export { NavLinks, NavMenuButtonMobile };
