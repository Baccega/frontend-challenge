import type { StackComponent } from "@/types/stack-component";
import {
  Share2,
  Lock,
  Boxes,
  Database,
  ClipboardCheck,
  KeyRound,
  BadgeCheck,
  Package,
  BrainCircuit,
} from "lucide-react";

export function getIsSharedIcon(isShared: boolean) {
  return isShared ? Share2 : Lock;
}

export function getStackComponentIcon(
  stackComponentType: StackComponent["type"],
) {
  switch (stackComponentType) {
    case "orchestrator":
      return Boxes;
    case "artifact_store":
      return Database;
    case "experiment_tracker":
      return ClipboardCheck;
    case "secrets_manager":
      return KeyRound;
    case "container_registry":
      return Package;
    case "data_validator":
      return BadgeCheck;
    case "model_deployer":
      return BrainCircuit;
  }
}
