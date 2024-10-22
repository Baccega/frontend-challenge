"use client";

import { stacksOptions } from "@/api/stacks";
import { StackSummary } from "@/components/stack-summary";
import { useSuspenseQuery } from "@tanstack/react-query";

export function StackList() {
  const { data } = useSuspenseQuery(stacksOptions);

  return (
    <>{data?.map((stack) => <StackSummary key={stack.id} stack={stack} />)} </>
  );
}
