import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import { Guild } from "@/types/general";
import { useNavigate } from "react-router-dom";

type Props = {
  guild: Guild;
};
// TODO: ADD CHARACTERS TO GUILD
// ADD DKP SYSTEM
// DISPLAY GUILD PAGE PROPERLY, CHARACTERS, LEADERBOARD, TOTAL DKP
const GuildCard = ({ guild }: Props) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isGM = user?.id === guild.guildMasterId;

  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{guild.name}</h2>
        <h3
          className={cn(
            "text-xs font-bold text-blue-500",
            guild.faction === "HORDE" && "text-red-500",
          )}
        >
          {guild.faction}
        </h3>
        {guild.description && (
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        )}
        {isGM && (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/guilds/${guild.id}`)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuildCard;

export const GuildCardSkeleton = () => {
  return <div className="skeleton h-32 w-96"></div>;
};
