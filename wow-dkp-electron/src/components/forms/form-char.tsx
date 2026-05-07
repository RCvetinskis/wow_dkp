import { useState } from "react";
import SelectFactions from "../cards/select-factions";
import { Faction } from "@/types/general";

type Props = {
  initialFaction?: Faction;
  initialGuild?: string | null;
};

const FormChar = ({ initialFaction, initialGuild }: Props) => {
  const [name, setName] = useState("");
  const [wowClass, setWowClass] = useState("");
  const [wowSpec, setWowSpec] = useState("");
  const [faction, setFaction] = useState<Faction>(initialFaction || "ALLIANCE");
  const [guild, setGuild] = useState(initialGuild || "");

  const handleSubmit = async () => {
    //: TODO CREATE CHARACTER CRUD
    // 1. send to frontend wow classes and specs
    // 2. make classes validation for example warlock cannot have holy spec
    // 3. create char
    console.log(name);
    console.log(faction);
    console.log(guild);
  };
  return (
    <div className="pt-2 space-y-2">
      <div className="grid md:grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Username"
          className="input "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Guild"
          className="input"
          value={guild}
          onChange={(e) => setGuild(e.target.value)}
        />
      </div>

      <SelectFactions
        faction={faction}
        setFaction={setFaction}
        className=" w-full"
      />

      <div className="flex justify-end modal-action">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary "
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default FormChar;
