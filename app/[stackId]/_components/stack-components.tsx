"use client";

import { stackComponentsOptions } from "@/api/stack-components";
import { useSuspenseQuery } from "@tanstack/react-query";

export function StackComponents() {
  const { data } = useSuspenseQuery(stackComponentsOptions);

  return <div>{JSON.stringify(data)}</div>;
}
