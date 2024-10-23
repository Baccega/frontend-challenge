import { getQueryClient } from "@/lib/query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { stackOptions } from "@/api/stacks";
import { StackDetails } from "./_components/stack-details";
import { stackComponentsOptions } from "@/api/stack-components";

export default async function StackDetailsPage({
  params,
}: {
  params: { stackId: string };
}) {
  // Params need to be awaited on Next 15, see https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
  const { stackId } = await params;
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(stackOptions(stackId));
  void queryClient.prefetchQuery(stackComponentsOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="md:px-4">
        <Suspense fallback={<div className="">Loading...</div>}>
          <StackDetails id={stackId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
