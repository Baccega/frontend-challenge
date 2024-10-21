import { z } from "zod";
import { OrchestratorStackComponentSchema } from "./stack-components-types/orchestrator";
import { ArtifactStoreStackComponentSchema } from "./stack-components-types/artifact-store";
import { ExperimentTrackerStackComponentSchema } from "./stack-components-types/experimental-tracker";
import { SecretsManagerStackComponentSchema } from "./stack-components-types/secrets-manager";
import { ContainerRegistryStackComponentSchema } from "./stack-components-types/container-registry";
import { DataValidatorStackComponentSchema } from "./stack-components-types/data-validator";
import { ModelDeployerStackComponentSchema } from "./stack-components-types/model-deployer";

// Base type for common properties
export const StackComponentCommonSchema = z.object({
  id: z.string().uuid(),
  created: z.string().optional(),
  updated: z.string().optional(),
  user: z.string().uuid().optional(),
  project: z.string().uuid().optional(),
  is_shared: z.boolean().optional(),
  name: z.string(),
});

export const StackComponentSchema = z.union([
  OrchestratorStackComponentSchema,
  ArtifactStoreStackComponentSchema,
  ExperimentTrackerStackComponentSchema,
  SecretsManagerStackComponentSchema,
  ContainerRegistryStackComponentSchema,
  DataValidatorStackComponentSchema,
  ModelDeployerStackComponentSchema,
]);
export const StackComponentArraySchema = z.array(StackComponentSchema);

export type StackComponent = z.infer<typeof StackComponentSchema>;
