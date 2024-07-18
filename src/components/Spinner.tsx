import * as React from "react";

import { cn } from "@/lib/utils";

const Spinner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex w-8 h-8 border-t animate-spin border-background-accent rounded-full",
      className
    )}
    {...props}
  />
));
Spinner.displayName = "Spinner";

export { Spinner };
