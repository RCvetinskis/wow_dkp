import { cn } from "@/lib/utils";
import { Faction } from "@/types/general";

type Props = {
  faction: Faction;
  setFaction: (faction: Faction) => void;
  className?: string;
};
const factions: Faction[] = ["ALLIANCE", "HORDE"];
const SelectFactions = ({ faction, setFaction, className }: Props) => {
  return (
    <select
      className={cn("select", className)}
      value={faction}
      onChange={(e) => setFaction(e.target.value as Faction)}
    >
      {factions.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
};

export default SelectFactions;
