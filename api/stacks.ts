import { baseUrl } from "@/lib/utils";
import { StackArraySchema } from "@/types/stack";
import { queryOptions } from "@tanstack/react-query";

// This query should probably also filter by project, but it's not needed for this demo
export const stacksOptions = queryOptions({
  queryKey: ["stacks"],
  queryFn: async () => {
    const res = await fetch(`${baseUrl}/stacks`);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const json = await res.json();
    return StackArraySchema.parse(json);
  },
});
