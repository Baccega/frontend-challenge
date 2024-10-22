// This file exist to avoid circular dependencies
import { z } from "zod";

// Base type for common StackComponent properties
export const StackComponentCommonSchema = z.object({
  id: z.string().uuid(),
  created: z.string().optional(),
  updated: z.string().optional(),
  user: z.string().uuid().optional(),
  project: z.string().uuid().optional(),
  is_shared: z.boolean().optional(),
  name: z.string(),
});

// This is needed because I need this list in JS land
export const availableStackComponentsTypes = {
  orchestrator: "orchestrator",
  artifact_store: "artifact_store",
  experiment_tracker: "experiment_tracker",
  secrets_manager: "secrets_manager",
  container_registry: "container_registry",
  data_validator: "data_validator",
  model_deployer: "model_deployer",
} as const;
