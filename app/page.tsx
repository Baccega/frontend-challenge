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
        <div className="w-full max-w-[var(--max-w)]">
          <div className="desktop:px-0 grid w-full grid-cols-[repeat(auto-fill,minmax(var(--stack-min-width),1fr))] gap-10 px-4">
            <Suspense fallback={<div className="row-start-2">Loading...</div>}>
              <Stacks />
            </Suspense>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
