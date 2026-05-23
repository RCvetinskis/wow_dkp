import { api } from "@/lib/api-handler";
import { useEffect, useState } from "react";
import SelectClass from "../selectors/select-class";

type Props = {
  initialGuild: string;
};

const FormChar = ({ initialGuild }: Props) => {
  const [name, setName] = useState("");
  const [wowClass, setWowClass] = useState("");
  const [wowSpec, setWowSpec] = useState("");
  const [gearScore, setGearScore] = useState("");

  const handleSubmit = async () => {
    //: TODO CREATE CHARACTER CRUD
    // 1. send to frontend wow classes and specs
    // 2. make classes validation for example warlock cannot have holy spec
    // 3. create char
    console.log(name);
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
          value={initialGuild}
          readOnly
        />
      </div>

      <SelectClass />

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
