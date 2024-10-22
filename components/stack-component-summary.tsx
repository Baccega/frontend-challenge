import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { getIsSharedIcon } from "@/lib/dynamic-icons";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { StackComponent } from "@/types/stack-component";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

// A bit over-engineered for this use tiny case, but I wanted to show how I would use this library in a real-world scenario
const stackComponentSummaryVariants = cva(
  "pb-9 hover:scale-[1.02] active:scale-[.98] hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        selected: "bg-lightGradient border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface StackComponentSummaryProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackComponentSummaryVariants> {
  className?: string;
  stackComponent: StackComponent;
}

const StackComponentSummary = React.forwardRef<
  HTMLDivElement,
  StackComponentSummaryProps
>(({ className, stackComponent, variant, ...props }, ref) => {
  return (
    <Card className={cn(stackComponentSummaryVariants({ variant }), className)}>
      <CardHeader className="">{stackComponent.name}</CardHeader>
      <CardDescription className="relative text-left">
        {stackComponent.flavor}
        {variant === "selected" && (
          <Check className="bg-primary absolute right-0 rounded-full p-1 text-white" />
        )}
      </CardDescription>
    </Card>
  );
});
StackComponentSummary.displayName = "StackComponentSummary";

export { StackComponentSummary };
