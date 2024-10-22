import { baseUrl } from "@/lib/utils";
import { StackComponentArraySchema } from "@/types/stack-component";
import { queryOptions } from "@tanstack/react-query";

// This query should probably also filter by project, but it's not needed for this demo
export const stackComponentsOptions = queryOptions({
  queryKey: ["components"],
  queryFn: async () => {
    const res = await fetch(`${baseUrl}/components`);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const json = await res.json();
    return StackComponentArraySchema.parse(json);
  },
});
