import { baseUrl } from "@/lib/utils";
import { queryOptions } from "@tanstack/react-query";

export const stacksOptions = queryOptions({
  queryKey: ["stacks"],
  queryFn: async () => {
    const res = await fetch(`${baseUrl}/stacks`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.json();
  },
});
