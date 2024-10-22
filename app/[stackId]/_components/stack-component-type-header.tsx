"use client";

import { stackComponentsOptions } from "@/api/stack-components";
import { getStackComponentIcon } from "@/lib/dynamic-icons";
import { getPrettyStackComponentType } from "@/lib/utils";
import { Stack } from "@/types/stack";
import { StackComponent } from "@/types/stack-component";

export function StackComponentTypeHeader({
  type,
  selectedComponents,
  availableComponents,
}: {
  selectedComponents: Stack["components"];
  availableComponents: StackComponent[];
  type: StackComponent["type"];
}) {
  const Icon = getStackComponentIcon(type);

  const isEnabled = (selectedComponents?.[type]?.length ?? 0) > 0;
  const enabledComponents = isEnabled
    ? availableComponents
        .filter((cur) =>
          selectedComponents[type]?.some((sel) => sel === cur.id),
        )
        .map((cur) => cur.name)
    : [];

  return (
    <h2 className="flex flex-wrap items-center gap-1 text-xl">
      <span className="flex items-center gap-3 text-xl">
        <Icon size={24} />
        {getPrettyStackComponentType(type)}
      </span>
      {isEnabled ? (
        <span className="text-md flex items-center gap-3">
          | {enabledComponents.join(", ")}
        </span>
      ) : null}
    </h2>
  );
}
