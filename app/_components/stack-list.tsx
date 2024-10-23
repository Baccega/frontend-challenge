"use client";

import { stacksOptions } from "@/api/stacks";
import { StackSummary } from "@/components/stack-summary";
import { useSuspenseQuery } from "@tanstack/react-query";

export function StackList() {
  // No need to check the status, it's always going to be "success",
  // see https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery
  const { data } = useSuspenseQuery(stacksOptions);

  return (
    <>{data?.map((stack) => <StackSummary key={stack.id} stack={stack} />)} </>
  );
}
