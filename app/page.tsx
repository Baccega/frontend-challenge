import { getQueryClient } from "@/lib/get-query-client";
import { Stacks } from "./_components/stacks";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { stacksOptions } from "@/api/stacks";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(stacksOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex h-full w-full justify-center bg-background pt-8">
        <div className="flex w-full max-w-[var(--max-w)] flex-col gap-10">
          <Suspense fallback={<div>Loading...</div>}>
            <Stacks />
          </Suspense>
        </div>
      </main>
    </HydrationBoundary>
  );
}
