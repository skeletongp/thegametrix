import { useState } from "react";
import GameCard from "../elements/GameCard";
import useGames from "../hooks/useGames";
import Loading from '../sections/Loading'

const Populars = () => {
  const [state] = useState({ "sort-by": "popularity" });
  const [games] = useGames("games", state, []);
  return (
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
      {games ? (
        games
          .slice(0, 12)
          .map((g) => (
            <GameCard
              title={g.title}
              image={g.thumbnail}
              key={g.id}
              id={g.id}
              platform={g.platform}
              url={g.game_url}
              date={g.release_date}
              short={g.short_description}
            />
          ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Populars;
