import { EventType } from "@/types/typesIndex";

// Function to preprocess the event description
export function preprocessString (string:string) {
  return string.split('\n').map(line => line.trim()).join('\n');
};
