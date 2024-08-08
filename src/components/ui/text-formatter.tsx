import * as React from "react";
import { cn } from "@/lib/utils";

const Heading1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-serif uppercase text-sm sm:text-md md:text-lg",
      className
    )}
    {...props}
  />
));
Heading1.displayName = "Heading1";

const Heading2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-thin text-4xl lg:text-5xl uppercase self-center lg:self-start",
      className
    )}
    {...props}
  />
));
Heading2.displayName = "Heading2";

const Heading3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-thin hover:text-orange-300 transition-colors ease-in-out",
      className
    )}
    {...props}
  />
));
Heading3.displayName = "Heading3";

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm lg:text-base leading-loose lg:leading-loose",
      className
    )}
    {...props}
  />
));
Paragraph.displayName = "Paragraph";

export { Heading1, Heading2, Heading3, Paragraph };
