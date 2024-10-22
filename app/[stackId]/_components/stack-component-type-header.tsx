"use client";

import { stackComponentsOptions } from "@/api/stack-components";
import { getStackComponentIcon } from "@/lib/dynamic-icons";
import { getPrettyStackComponentType } from "@/lib/utils";
import { StackComponent } from "@/types/stack-component";

export function StackComponentTypeHeader({
  type,
}: {
  type: StackComponent["type"];
}) {
  const Icon = getStackComponentIcon(type);

  return (
    <h2 className="flex items-center gap-3 pb-4 pt-6 text-xl">
      <Icon size={24} />
      {getPrettyStackComponentType(type)}
    </h2>
  );
}
