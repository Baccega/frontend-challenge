import { Skeleton } from "@/components/ui/skeleton";

export function StackListSkeleton() {
  return (
    <>
      {[...Array.from({ length: 7 }).keys()].map((cur) => (
        <Skeleton
          key={cur}
          className="h-40 w-full max-w-[calc(100vw-2rem)] rounded-xl"
        />
      ))}{" "}
    </>
  );
}
