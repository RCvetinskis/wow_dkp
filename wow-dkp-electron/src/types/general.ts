export type Faction = "ALLIANCE" | "HORDE";
export type UserRole = "USER" | "ADMIN";
export interface Guild {
  id: number;
  name: string;
  description?: string;
  guildMasterId: number;

  faction: Faction;

  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  name: string;
  role: UserRole;
}
