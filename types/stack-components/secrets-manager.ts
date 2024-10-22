import { z } from "zod";
import { StackComponentCommonSchema } from "../common";

const SecretsManagerStackComponentBaseSchema =
  StackComponentCommonSchema.extend({
    type: z.literal("secrets_manager"),
  });

const SecretsManagerGpcFlavorSchema =
  SecretsManagerStackComponentBaseSchema.extend({
    flavor: z.literal("gcp"),
    configuration: z.object({
      scope: z.string(),
      namespace: z.union([z.null(), z.string()]),
      project_id: z.string(),
    }),
  });

const SecretsManagerAwsFlavorSchema =
  SecretsManagerStackComponentBaseSchema.extend({
    flavor: z.literal("aws"),
    configuration: z.object({
      scope: z.string(),
      namespace: z.union([z.null(), z.string()]),
      region_name: z.string(),
    }),
  });

export const SecretsManagerStackComponentSchema = z.union([
  SecretsManagerGpcFlavorSchema,
  SecretsManagerAwsFlavorSchema,
]);

export type SecretsManagerStackComponent = z.infer<
  typeof SecretsManagerStackComponentSchema
>;
