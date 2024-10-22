import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import { getStackComponentIcon } from "@/lib/dynamic-icons";
import type { Stack as StackSummary } from "@/types/stack";
import { StackComponent } from "@/types/stack-component";
import { getStackComponentName } from "@/lib/mock";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { VisibilityIcon } from "./visibility-icon";

export interface StackSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  stack: StackSummary;
}

const StackSummary = React.forwardRef<HTMLDivElement, StackSummaryProps>(
  ({ className, stack, ...props }, ref) => {
    const { name, description, is_shared, components } = stack;

    return (
      <Link href={`/${stack.id}`} className="group/card cursor-pointer">
        <Card
          className={cn(
            className,
            "@container/card text- group-hover/card:border-primary transition-colors group-hover/card:bg-lightGradient",
          )}
          ref={ref}
          {...props}
        >
          <CardHeader className="gap-2">
            <h2 className="inline-block h-fit text-lg font-medium">{name}</h2>{" "}
            <VisibilityIcon is_shared={is_shared ?? false} />
          </CardHeader>
          <CardContent className="@xl/card:flex-row relative flex flex-col gap-4">
            <p className="@xl/card:basis-2/5">
              {/* Adding Lorem ipsum because description is empty */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              {description}
            </p>
            <div className="@xl/card:basis-3/5 @xl/card:justify-end flex flex-wrap gap-4">
              {Object.entries(components).map(([stackComponentType, ids]) => {
                const StackComponentIcon = getStackComponentIcon(
                  stackComponentType as StackComponent["type"],
                );

                return ids.map((id) => {
                  // For now I'll use this function to avoid making an extra request (to /components) just for this field
                  // IMO the best way to solve this is to send the component name alongside the ids on the /stacks call from the backend
                  const stackComponentName = getStackComponentName(id);
                  return (
                    <Tooltip key={id}>
                      <TooltipTrigger
                        tabIndex={-1}
                        aria-hidden
                        className="flex h-fit items-center gap-1 rounded-md border border-gray-300 px-2 py-1"
                      >
                        <StackComponentIcon size={20} />
                        {stackComponentName}
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-center">
                        <h3 className="font-bold">{stackComponentName}</h3>
                        <p>{stackComponentType}</p>
                        <p>{id}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                });
              })}
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  },
);
StackSummary.displayName = "StackSummary";

export { StackSummary };
