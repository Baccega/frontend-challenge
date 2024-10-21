import { getQueryClient } from "@/lib/get-query-client";
import { Stack } from "./_components/stack";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { stacksOptions } from "@/api/stacks";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(stacksOptions);

  return (
    <main className="flex h-full w-full justify-center bg-background pt-8">
      <div className="w-full max-w-[var(--max-w)]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<div>Loading...</div>}>
            <Stack />
          </Suspense>
        </HydrationBoundary>
      </div>
    </main>
  );
}
