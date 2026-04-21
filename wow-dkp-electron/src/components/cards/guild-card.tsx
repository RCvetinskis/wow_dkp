import { cn } from "@/lib/utils";
import { Guild } from "@/types/general";

type Props = {
  guild: Guild;
};

const GuildCard = ({ guild }: Props) => {
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
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default GuildCard;

export const GuildCardSkeleton = () => {
  return <div className="skeleton h-32 w-96"></div>;
};
