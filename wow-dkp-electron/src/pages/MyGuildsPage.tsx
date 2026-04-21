import GuildList from "@/components/lists/guild-list";
import { authenticatedApi } from "@/lib/api-handler";
import { Guild } from "@/types/general";
import { useEffect, useState } from "react";

const MyGuildsPage = () => {
  const [guilds, setGuilds] = useState<Guild[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        setLoading(true);
        const { data } = await authenticatedApi.get("/guild/me");

        setGuilds(data);
      } catch {
        setGuilds([]);
      } finally {
        setLoading(false);
      }
    };
    fetchGuilds();
  }, []);
  return (
    <div>
      <GuildList guilds={guilds} loading={loading} />
    </div>
  );
};

export default MyGuildsPage;
