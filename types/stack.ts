import { z } from "zod";

export const StackSchema = z.object({
  id: z.string().uuid(),
  created: z.string(),
  updated: z.string(),
  user: z.string().uuid(),
  project: z.string().uuid(),
  is_shared: z.boolean(),
  name: z.string(),
  description: z.string(),
  components: z.object({
    artifact_store: z.array(z.string().uuid()).optional(),
    orchestrator: z.array(z.string().uuid()).optional(),
    experiment_tracker: z.array(z.string().uuid()).optional(),
    secrets_manager: z.array(z.string().uuid()).optional(),
    container_registry: z.array(z.string().uuid()).optional(),
    data_validator: z.array(z.string().uuid()).optional(),
    model_deployer: z.array(z.string().uuid()).optional(),
  }),
});

export const StackArraySchema = z.array(StackSchema);

export type Stack = z.infer<typeof StackSchema>;
