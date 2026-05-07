import FormGuild from "@/components/forms/form-guild";
import { fetchGuildById } from "@/helpers/guild-helper";
import { Guild } from "@/types/general";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const GuildEditPage = (props: Props) => {
  const { id } = useParams();

  const [guild, setGuild] = useState<Guild | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuild = async () => {
      try {
        setLoading(true);

        const data = await fetchGuildById(id);
        console.log(data);
        setGuild(data);
      } catch {
        setGuild(null);
      } finally {
        setLoading(false);
      }
    };
    fetchGuild();
  }, []);

  if (!guild) return <div>Not found</div>;
  return (
    <div>
      <FormGuild guild={guild} />
    </div>
  );
};

export default GuildEditPage;
