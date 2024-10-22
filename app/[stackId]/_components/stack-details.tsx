"use client";

import { stackOptions } from "@/api/stacks";
import { useSuspenseQuery } from "@tanstack/react-query";

export function StackDetails({ id }: { id: string }) {
  const { data } = useSuspenseQuery(stackOptions(id));

  return <div>{JSON.stringify(data)}</div>;
}
