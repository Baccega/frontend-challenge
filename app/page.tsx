import { getQueryClient } from "@/lib/query-client";
import { StackList } from "./_components/stack-list";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { stacksOptions } from "@/api/stacks";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(stacksOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="desktop:px-0 grid w-full max-w-[calc(100vw-2rem)] grid-cols-[repeat(auto-fill,minmax(var(--stack-min-width),1fr))] gap-10">
        <Suspense fallback={<div className="row-start-2">Loading...</div>}>
          <StackList />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
