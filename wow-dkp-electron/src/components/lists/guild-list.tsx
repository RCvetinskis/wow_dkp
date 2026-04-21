import { useEffect, useState } from "react";
import GuildCard, { GuildCardSkeleton } from "../cards/guild-card";
import { api } from "@/lib/api-handler";
import { Guild } from "@/types/general";

const GuildList = () => {
  const [guilds, setGuilds] = useState<Guild[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/guild");
        console.log(data);
        setGuilds(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGuilds();
  }, []);

  if (loading)
    return (
      <div className="flex gap-5 items-center flex-wrap justify-center md:justify-start ">
        {Array.from({ length: 5 }).map((_, i) => (
          <GuildCardSkeleton key={i} />
        ))}
      </div>
    );

  return (
    <div className="flex gap-5 items-center flex-wrap justify-center md:justify-start ">
      {guilds.map((guild) => (
        <GuildCard key={guild.id} guild={guild} />
      ))}
    </div>
  );
};

export default GuildList;
