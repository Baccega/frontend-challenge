"use client";

import { stackOptions } from "@/api/stacks";
import { VisibilityIcon } from "@/components/visibility-icon";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { StackComponents } from "./stack-components";

export function StackDetails({ id }: { id: string }) {
  // No need to check the status, it's always going to be "success",
  // see https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery
  const { data } = useSuspenseQuery(stackOptions(id));

  const { name, is_shared, description, created, updated, components } = data;

  return (
    <>
      <Card className="w-full">
        <CardHeader className="gap-2">
          <h2 className="inline-block h-fit break-all text-xl font-bold">
            {name}
          </h2>{" "}
          <VisibilityIcon is_shared={is_shared ?? false} />
        </CardHeader>
        <CardDescription className="flex flex-col">
          <span>
            {/* Adding Lorem ipsum because description is empty */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            {description}
          </span>
          <span className="pt-2">
            Created: {new Date(created).toLocaleString()}
          </span>
          <span>Updated: {new Date(updated).toLocaleString()}</span>
        </CardDescription>
      </Card>
      <StackComponents selectedComponents={components} />
    </>
  );
}
