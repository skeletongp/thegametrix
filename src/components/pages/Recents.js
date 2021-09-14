import { useState } from "react";
import GameCard from "../elements/GameCard";
import useGames from "../hooks/useGames";

const Recents = () => {
  const [state] = useState({ "sort-by": "popularity" });

  const [games] = useGames("games", state, []);
    console.log(games)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
     {games ?
          games.slice(0,12).map((g) => (
            <GameCard
              title={g.title}
              image={g.thumbnail}
              key={g.id}
              platform={g.platform}
              url={g.game_url}
              date={g.release_date}
            />
          )):
          <h1 className="text-7xl font-bold">Cargando</h1>}
    </div>
  );
};
export default Recents;
