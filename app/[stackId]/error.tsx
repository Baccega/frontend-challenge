"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="row-start-2 flex flex-col items-center gap-4 text-center">
      <h2 className="text-2xl">
        Something went wrong while rendering the stack detail page!
      </h2>
      <Button className="w-fit" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
