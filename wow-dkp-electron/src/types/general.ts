export type Faction = "ALLIANCE" | "HORDE";
export interface Guild {
  id: number;
  name: string;
  faction: Faction;
}
