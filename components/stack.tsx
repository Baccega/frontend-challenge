import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";

const stackVariants = cva("", {
  variants: {
    variant: {
      default: "",
      focussed: "border-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  name: string;
  description: string;
  // shared: boolean;
  // user: string;
  // project: string;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, variant, name, children, ...props }, ref) => {
    return (
      <Card
        className={cn(stackVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <CardHeader>{name}</CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    );
  },
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
