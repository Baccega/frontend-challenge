"use client";

import { stacksOptions } from "@/api/stacks";
import { Stack } from "@/components/stack";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Stacks() {
  const { data } = useSuspenseQuery(stacksOptions);

  return <>{data?.map((stack) => <Stack key={stack.id} stack={stack} />)} </>;
}
