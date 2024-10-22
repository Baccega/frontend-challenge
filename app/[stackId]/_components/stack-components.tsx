"use client";

import { stackComponentsOptions } from "@/api/stack-components";
import { Stack } from "@/types/stack";
import { useSuspenseQuery } from "@tanstack/react-query";
import { StackComponentTypeHeader } from "./stack-component-type-header";
import { availableStackComponentsTypes } from "@/types/common";
import { StackComponent } from "@/types/stack-component";
import { StackComponentSummary } from "@/components/stack-component-summary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function StackComponents({
  selectedComponents,
}: {
  selectedComponents: Stack["components"];
}) {
  const { data } = useSuspenseQuery(stackComponentsOptions);

  return (
    <>
      {Object.keys(availableStackComponentsTypes).map((type) => (
        <Accordion key={type} className="mt-4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {/* Typescript is not smart enough to infer the type in this case */}
              <StackComponentTypeHeader
                type={type as StackComponent["type"]}
                selectedComponents={selectedComponents}
                availableComponents={data}
              />
            </AccordionTrigger>
            <AccordionContent className="p-2">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(var(--stack-component-min-width),1fr))] gap-4">
                {data
                  .filter((cur) => cur.type === type)
                  .map((stackComponent) => {
                    const selected = selectedComponents?.[
                      type as StackComponent["type"]
                    ]?.find((cur) => cur === stackComponent.id);
                    return (
                      <Dialog key={stackComponent.id}>
                        <DialogTrigger>
                          <StackComponentSummary
                            stackComponent={stackComponent}
                            variant={selected ? "selected" : "default"}
                          />
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{stackComponent.name}</DialogTitle>
                            <DialogDescription className="w-full pt-2">
                              Configuration:
                            </DialogDescription>
                            <Table className="w-full pt-2">
                              <TableBody className="gap-2">
                                {Object.keys(stackComponent.configuration)
                                  .length === 0 && (
                                  <TableRow>
                                    <TableCell className="pl-0 font-medium">
                                      No additional configuration
                                    </TableCell>
                                  </TableRow>
                                )}
                                {Object.entries(
                                  stackComponent.configuration,
                                ).map(([key, value]) => (
                                  <TableRow key={key}>
                                    <TableCell className="pl-0 font-medium">
                                      {key}
                                    </TableCell>
                                    <TableCell className="break-all">
                                      {JSON.stringify(value)}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    );
                  })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
