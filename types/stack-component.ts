import { z } from "zod";
import { OrchestratorStackComponentSchema } from "./stack-components/orchestrator";
import { ArtifactStoreStackComponentSchema } from "./stack-components/artifact-store";
import { ExperimentTrackerStackComponentSchema } from "./stack-components/experimental-tracker";
import { SecretsManagerStackComponentSchema } from "./stack-components/secrets-manager";
import { ContainerRegistryStackComponentSchema } from "./stack-components/container-registry";
import { DataValidatorStackComponentSchema } from "./stack-components/data-validator";
import { ModelDeployerStackComponentSchema } from "./stack-components/model-deployer";

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
