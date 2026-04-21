import GuildCard from "@/components/cards/guild-card";
import { authenticatedApi } from "@/lib/api-handler";
import { Guild } from "@/types/general";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GuildPage = () => {
  const { id } = useParams();

  const [guild, setGuild] = useState<Guild | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        setLoading(true);
        const { data } = await authenticatedApi.get(`/guild/${id}`);

        setGuild(data);
      } catch {
        setGuild(null);
      } finally {
        setLoading(false);
      }
    };
    fetchGuilds();
  }, []);

  if (!guild) return <div>Not found</div>;
  return (
    <div>
      <GuildCard guild={guild} />
    </div>
  );
};

export default GuildPage;
