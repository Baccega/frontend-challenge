import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { getIsSharedIcon } from "@/lib/dynamic-icons";
import { cn } from "@/lib/utils";

// A bit over-engineered for this use tiny case, but I wanted to show how I would use this library in a real-world scenario
const isSharedVariants = cva("mt-0", {
  variants: {
    variant: {
      private: "",
      public: "text-emerald-600",
    },
  },
  defaultVariants: {
    variant: "private",
  },
});

export interface VisibilityIconProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof isSharedVariants> {
  className?: string;
  is_shared: boolean;
}

const VisibilityIcon = ({ className, is_shared }: VisibilityIconProps) => {
  const IsSharedIcon = getIsSharedIcon(is_shared);

  return (
    <IsSharedIcon
      size={20}
      className={cn(
        isSharedVariants({
          variant: is_shared ? "public" : "private",
        }),
        className,
      )}
    />
  );
};

VisibilityIcon.displayName = "VisibilityIcon";

export { VisibilityIcon };
