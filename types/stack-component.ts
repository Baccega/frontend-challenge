import { z } from "zod";
import { OrchestratorStackComponentSchema } from "./stack-components/orchestrator";
import { ArtifactStoreStackComponentSchema } from "./stack-components/artifact-store";
import { ExperimentTrackerStackComponentSchema } from "./stack-components/experimental-tracker";
import { SecretsManagerStackComponentSchema } from "./stack-components/secrets-manager";
import { ContainerRegistryStackComponentSchema } from "./stack-components/container-registry";
import { DataValidatorStackComponentSchema } from "./stack-components/data-validator";
import { ModelDeployerStackComponentSchema } from "./stack-components/model-deployer";

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
