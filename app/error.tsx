"use client";

import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="row-start-2 flex flex-col items-center gap-4 text-center">
      <h2 className="text-2xl">
        Something went wrong while rendering the stacks page!
      </h2>
      <Button className="w-fit" onClick={() => window.location.reload()}>
        <RotateCcw /> Try again
      </Button>
    </div>
  );
}
