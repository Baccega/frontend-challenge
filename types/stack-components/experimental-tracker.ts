import { z } from "zod";
import { StackComponentCommonSchema } from "../common";

const ExperimentTrackerStackComponentBaseSchema =
  StackComponentCommonSchema.extend({
    type: z.literal("experiment_tracker"),
  });

const ExperimentTrackerMlflowFlavorSchema =
  ExperimentTrackerStackComponentBaseSchema.extend({
    flavor: z.literal("mlflow"),
    configuration: z.object({
      experiment_name: z.null().optional(),
      nested: z.boolean().optional(),
      tags: z.object({}).optional(),
      tracking_uri: z.union([z.string(), z.null()]),
      tracking_username: z.union([z.string(), z.null()]),
      tracking_password: z.union([z.string(), z.null()]),
      tracking_token: z.null(),
      tracking_insecure_tls: z.boolean(),
      databricks_host: z.union([z.string(), z.null()]),
    }),
  });

export const ExperimentTrackerStackComponentSchema =
  ExperimentTrackerMlflowFlavorSchema;

export type ExperimentTrackerStackComponent = z.infer<
  typeof ExperimentTrackerStackComponentSchema
>;
