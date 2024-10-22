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
