"use client";

import { stackComponentsOptions } from "@/api/stack-components";
import { Stack } from "@/types/stack";
import { useSuspenseQuery } from "@tanstack/react-query";
import { StackComponentTypeHeader } from "./stack-component-type-header";
import { availableStackComponentsTypes } from "@/types/common";
import { StackComponent } from "@/types/stack-component";
import { StackComponentSummary } from "@/components/stack-component-summary";

export function StackComponents({
  selectedComponents,
}: {
  selectedComponents: Stack["components"];
}) {
  const { data } = useSuspenseQuery(stackComponentsOptions);

  return (
    <>
      {Object.keys(availableStackComponentsTypes).map((type) => (
        <span className="py-4" key={type}>
          {/* Typescript is not smart enough to infer the type here */}
          <StackComponentTypeHeader type={type as StackComponent["type"]} />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(var(--stack-component-min-width),1fr))] gap-4">
            {data
              .filter((cur) => cur.type === type)
              .map((stackComponent) => {
                const selected = selectedComponents?.[
                  type as StackComponent["type"]
                ]?.find((cur) => cur === stackComponent.id);
                return (
                  <StackComponentSummary
                    key={stackComponent.id}
                    stackComponent={stackComponent}
                    variant={selected ? "selected" : "default"}
                  />
                );
              })}
          </div>
        </span>
      ))}
    </>
  );
}
