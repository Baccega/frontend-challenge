import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { StackComponent } from "@/types/stack-component";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const stackComponentSummaryVariants = cva(
  "pb-9 group-hover/component:shadow-lg group-hover/component:scale-[1.02] active:shadow-inner active:scale-[.98] group-hover/component:cursor-pointer group-hover/component:bg-lightGradient group-hover/component:border-primary group-focus/component:bg-lightGradient group-focus/component:border-primary group-focus/component:scale-[1.02] transition-all",
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
    <Card
      ref={ref}
      {...props}
      className={cn(stackComponentSummaryVariants({ variant }), className)}
    >
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
