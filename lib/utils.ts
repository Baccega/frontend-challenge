import { StackComponent } from "@/types/stack-component";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const baseUrl = "https://zenml-frontend-challenge-backend.fly.dev";

// Utility function to merge classNames togheter
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Make the first letter of each word uppercase and remove underscores
export function getPrettyStackComponentType(type: StackComponent["type"]) {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
