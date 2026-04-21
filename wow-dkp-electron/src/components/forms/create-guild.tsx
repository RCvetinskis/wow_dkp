import { useState } from "react";
import { Faction } from "@/types/general";
import { api } from "@/lib/api-handler";
import { useToast } from "@/context/toast-context";
import { useNavigate } from "react-router-dom";

const factions: Faction[] = ["ALLIANCE", "HORDE"];

const CreateGuild = () => {
  const [name, setName] = useState("");
  const [faction, setFaction] = useState<Faction>("ALLIANCE");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/guild", {
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
        <div className="space-x-6">
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
        </div>

        <div className="flex justify-end">
          <button disabled={loading} className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGuild;
