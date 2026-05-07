import Dialog from "../dialog";
import FormChar from "../forms/form-char";
import { Faction, Guild } from "@/types/general";

type Props = {
  initialFaction?: Faction;
  initialGuild?: Guild | null;
};

const chars: any[] = [];
const SelectChars = ({ initialFaction, initialGuild }: Props) => {
  if (chars.length === 0) {
    return (
      <div className="flex items-center gap-3">
        <h2 className="text-sm">No Characters found</h2>

        <Dialog
          modalId="create-char"
          buttonTitle="Create Character"
          buttonClassName="btn-primary btn-xs"
        >
          <FormChar
            initialGuild={initialGuild?.name}
            initialFaction={initialFaction}
          />
        </Dialog>
      </div>
    );
  }
  return (
    <div>
      <select className="select">
        {chars.map((f) => (
          <option key={f.id} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectChars;
