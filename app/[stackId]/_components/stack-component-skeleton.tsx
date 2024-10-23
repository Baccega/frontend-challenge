import { Skeleton } from "@/components/ui/skeleton";

export function StackDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="mb-2 h-40 w-full rounded-xl" />
      {[...Array.from({ length: 7 }).keys()].map((cur) => (
        <Skeleton key={cur} className="h-20 w-full rounded-lg" />
      ))}{" "}
    </div>
  );
}
