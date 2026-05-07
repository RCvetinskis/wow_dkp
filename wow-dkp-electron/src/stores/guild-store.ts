import { Guild } from "@/types/general";
import { create } from "zustand";

type GuildStore = {
  guild: Guild | null;

  setGuild: (guild: Guild | null) => void;
  clearGuild: () => void;
};

export const useGuildStore = create<GuildStore>((set) => ({
  guild: null,

  setGuild: (guild) =>
    set(() => ({
      guild,
    })),

  clearGuild: () =>
    set(() => ({
      guild: null,
    })),
}));
