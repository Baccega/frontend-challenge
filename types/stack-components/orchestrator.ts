import { z } from "zod";
import { StackComponentCommonSchema } from "../common";

const OrchestratorStackComponentBaseSchema = StackComponentCommonSchema.extend({
  type: z.literal("orchestrator"),
});

const OrchestratorKubeflowFlavorSchema =
  OrchestratorStackComponentBaseSchema.extend({
    flavor: z.literal("kubeflow"),
    configuration: z.object({
      synchronous: z.boolean(),
      timeout: z.number(),
      client_args: z.object({}),
      user_namespace: z.null(),
      node_selectors: z.object({}),
      node_affinity: z.object({}),
      pod_settings: z.null(),
      kubeflow_pipelines_ui_port: z.number(),
      kubeflow_hostname: z.string(),
      kubeflow_namespace: z.string(),
      kubernetes_context: z.string(),
      skip_local_validations: z.boolean(),
      skip_cluster_provisioning: z.boolean(),
      skip_ui_daemon_provisioning: z.boolean(),
    }),
  });

const OrchestratorVertexFlavorSchema =
  OrchestratorStackComponentBaseSchema.extend({
    flavor: z.literal("vertex"),
    configuration: z.object({
      labels: z.object({}),
      synchronous: z.boolean(),
      node_selector_constraint: z.null(),
      pod_settings: z.null(),
      service_account_path: z.null(),
      project: z.string(),
      location: z.string(),
      pipeline_root: z.null(),
      encryption_spec_key_name: z.null(),
      workload_service_account: z.string(),
      network: z.null(),
      cpu_limit: z.null(),
      memory_limit: z.null(),
      gpu_limit: z.null(),
    }),
  });

const OrchestratorLocalFlavorSchema =
  OrchestratorStackComponentBaseSchema.extend({
    flavor: z.literal("local"),
    configuration: z.object({}),
  });

export const OrchestratorStackComponentSchema = z.union([
  OrchestratorKubeflowFlavorSchema,
  OrchestratorVertexFlavorSchema,
  OrchestratorLocalFlavorSchema,
]);

export type OrchestratorStackComponent = z.infer<
  typeof OrchestratorStackComponentSchema
>;
