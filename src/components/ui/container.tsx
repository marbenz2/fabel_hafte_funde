import * as React from "react";

import { cn } from "@/lib/utils";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("flex flex-col w-full gap-4 p-4", className)}
    {...props}
  />
));
Container.displayName = "Container";

export { Container };
