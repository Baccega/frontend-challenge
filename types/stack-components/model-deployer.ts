import { z } from "zod";
import { StackComponentCommonSchema } from "../stack-component";

const ModelDeployerStackComponentBaseSchema = StackComponentCommonSchema.extend(
  {
    type: z.literal("model_deployer"),
  },
);

const ModelDeployerKServeFlavorSchema =
  ModelDeployerStackComponentBaseSchema.extend({
    flavor: z.literal("kserve"),
    configuration: z.object({
      kubernetes_context: z.string(),
      kubernetes_namespace: z.string(),
      base_url: z.string(),
      secret: z.string(),
      custom_domain: z.null(),
    }),
  });

export const ModelDeployerStackComponentSchema =
  ModelDeployerKServeFlavorSchema;

export type ModelDeployerStackComponent = z.infer<
  typeof ModelDeployerStackComponentSchema
>;
