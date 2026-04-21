import GuildCard, { GuildCardSkeleton } from "../cards/guild-card";
import { Guild } from "@/types/general";
type Props = {
  guilds: Guild[];
  loading: boolean;
};
const GuildList = ({ guilds, loading }: Props) => {
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
