import { z } from "zod";
import { StackComponentCommonSchema } from "../stack-component";

const ContainerRegistryStackComponentBaseSchema =
  StackComponentCommonSchema.extend({
    type: z.literal("container_registry"),
  });

// In this case these two flavors are basically identical and could be merged,
// but this structure is more resiliant to future changes
const ContainerRegistryAwsFlavorSchema =
  ContainerRegistryStackComponentBaseSchema.extend({
    flavor: z.literal("aws"),
    configuration: z.object({
      authentication_secret: z.null(),
      uri: z.string(),
    }),
  });

const ContainerRegistryGcpFlavorSchema =
  ContainerRegistryStackComponentBaseSchema.extend({
    flavor: z.literal("gcp"),
    configuration: z.object({
      authentication_secret: z.null(),
      uri: z.string(),
    }),
  });

export const ContainerRegistryStackComponentSchema = z.union([
  ContainerRegistryAwsFlavorSchema,
  ContainerRegistryGcpFlavorSchema,
]);

export type ContainerRegistryStackComponent = z.infer<
  typeof ContainerRegistryStackComponentSchema
>;