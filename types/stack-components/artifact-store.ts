import { z } from "zod";
import { StackComponentCommonSchema } from "../stack-component";

const ArtifactStoreStackComponentBaseSchema = StackComponentCommonSchema.extend(
  {
    type: z.literal("artifact_store"),
  },
);

const ArtifactStoreGpcFlavorSchema =
  ArtifactStoreStackComponentBaseSchema.extend({
    flavor: z.literal("gcp"),
    configuration: z.object({
      authentication_secret: z.null(),
      path: z.string(),
    }),
  });

const ArtifactStoreS3FlavorSchema =
  ArtifactStoreStackComponentBaseSchema.extend({
    flavor: z.literal("s3"),
    configuration: z.object({
      authentication_secret: z.null(),
      path: z.string(),
      key: z.null(),
      secret: z.null(),
      token: z.null(),
      client_kwargs: z.null(),
      config_kwargs: z.null(),
      s3_additional_kwargs: z.null(),
    }),
  });

const ArtifactStoreLocalFlavorSchema =
  ArtifactStoreStackComponentBaseSchema.extend({
    flavor: z.literal("local"),
    configuration: z.object({}),
  });

export const ArtifactStoreStackComponentSchema = z.union([
  ArtifactStoreGpcFlavorSchema,
  ArtifactStoreS3FlavorSchema,
  ArtifactStoreLocalFlavorSchema,
]);

export type ArtifactStoreStackComponent = z.infer<
  typeof ArtifactStoreStackComponentSchema
>;