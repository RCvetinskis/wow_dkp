import { useState } from "react";
import { Faction, Guild } from "@/types/general";
import { authenticatedApi } from "@/lib/api-handler";
import { useToast } from "@/context/toast-context";
import { useNavigate } from "react-router-dom";
import SelectChars from "../cards/select-chars";

const factions: Faction[] = ["ALLIANCE", "HORDE"];
type Props = {
  guild: Guild;
};
const FormGuild = ({ guild }: Props) => {
  const initialName = guild?.name || "";
  const initialFaction = guild?.faction || "ALLIANCE";
  const [name, setName] = useState(initialName);
  const [faction, setFaction] = useState<Faction>(initialFaction);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authenticatedApi.post("/guild", {
        name,
        faction,
      });

      showToast({
        message: "Created Sucessfully",
        type: "success",
      });

      navigate("/guilds");
    } catch (err: any) {
      showToast({
        message: err.message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-200 w-full mx-auto shadow-2xl p-4">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-x-6 space-y-6">
          <input
            type="text"
            placeholder="Guild Title"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="select"
            value={faction}
            onChange={(e) => setFaction(e.target.value as Faction)}
          >
            {factions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          <SelectChars initialGuild={guild} />
        </div>

        <div className="flex justify-end">
          <button disabled={loading} className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormGuild;
