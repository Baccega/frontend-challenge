import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { stackOptions } from "@/api/stacks";
import { StackDetails } from "./_components/stack-details";
import { StackComponents } from "./_components/stack-components";

export default async function StackPage({
  params,
}: {
  params: { stackId: string };
}) {
  // Params need to be awaited, see https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
  const { stackId } = await params;
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(stackOptions(stackId));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div className="">Loading...</div>}>
        <StackDetails id={stackId} />
      </Suspense>
      <Suspense fallback={<div className="">Loading...</div>}>
        <StackComponents />
      </Suspense>
    </HydrationBoundary>
  );
}
