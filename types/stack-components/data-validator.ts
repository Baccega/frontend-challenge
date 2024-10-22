import { z } from "zod";
import {
  availableStackComponentsTypes,
  StackComponentCommonSchema,
} from "../common";

const DataValidatorStackComponentBaseSchema = StackComponentCommonSchema.extend(
  {
    type: z.literal(availableStackComponentsTypes.data_validator),
  },
);

// In this case these two flavors are basically identical and could be merged,
// but this structure is more resiliant to future changes
const DataValidatorDeepchecksFlavorSchema =
  DataValidatorStackComponentBaseSchema.extend({
    flavor: z.literal("deepchecks"),
    configuration: z.object({}),
  });

const DataValidatorEvidentlyFlavorSchema =
  DataValidatorStackComponentBaseSchema.extend({
    flavor: z.literal("evidently"),
    configuration: z.object({}),
  });

export const DataValidatorStackComponentSchema = z.union([
  DataValidatorDeepchecksFlavorSchema,
  DataValidatorEvidentlyFlavorSchema,
]);

export type DataValidatorStackComponent = z.infer<
  typeof DataValidatorStackComponentSchema
>;
