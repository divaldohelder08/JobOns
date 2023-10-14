import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto w-full max-w-7xl", className)}
    {...props}
  >
    {children}
  </div>
));
Container.displayName = "Container";


export default Container