import { CharacterStatus } from "@/types/rickAndMorty";

const statusColorMap: Record<CharacterStatus, string> = {
  Alive: "var(--status-alive)",
  Dead: "var(--status-dead)",
  unknown: "var(--status-unknown)",
};

export const getStatusColor = (status: CharacterStatus) => {
  return statusColorMap[status];
};
