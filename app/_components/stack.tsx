"use client";

import { stacksOptions } from "@/api/stacks";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Stack({}) {
  const { data } = useSuspenseQuery(stacksOptions);

  return <div>{JSON.stringify(data)}</div>;
}
