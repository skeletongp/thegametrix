import GameCard from "../elements/GameCard";
import useGames from "../hooks/useGames";
import { useState, useEffect } from "react";
import { Pagination, Select } from "grommet";
import Loading from "../sections/Loading";
import { withRouter } from "react-router";

const Games = (props) => {
  const [state, setState] = useState(props.params);
  const [text, setText] = useState(props.text);
  const [page, setPage] = useState({ start: 1, end: 12 });
  const [value, setValue] = useState("alphabetical");

  const [games, error] = useGames("games", state, page);
  
  const change = (e) => {
    setPage({
      start: e.startIndex + 1,
      end: e.endIndex,
    });
  };
  
  useEffect(() => {
    setState({
      ...state,
      "sort-by": value,
    });
  }, [value]);
  
  useEffect(() => {
     if (props.location.search.length!=0) {
      setState({
        ...state,
        "category": `${props.location.search.substring(1)}`,
      });
      setText(
        `${props.location.search.substring(1)}`
      );
     }
  },[]);
  
  const opciones = [
    { name: "Ordenar por: Fecha", value: "realease_date" },
    { name: "Ordenar por: Popularidad", value: "popularity" },
    { name: "Ordenar por: Nombre", value: "alphabetical" },
    { name: "Ordenar por: Relevancia", value: "relevance" },
  ];
  if (error) {
    return (
      <>
        <h1 className="font-bold text-center text-xl">Hubo un error</h1>
        <h2>Ha ocurrido un error con su solicitud y no pudo procesarse</h2>
      </>
    );
  }
  return (
    <>
      <h1 className="text-center uppercase font-bold text-lg md:text-lg lg:text-3xl my-2 lg:my-3">
        {text}
      </h1>
      <div className="flex justify-center lg:justify-between w-full my-2 text-white px-2">
        <div className="text-black hidden md:block">
          <Select
            options={[
              "Ordenar por: Fecha",
              "Ordenar por: Nombre",
              "Ordenar por: Popularidad",
              "Ordenar por: Relevancia",
            ]}
            value={opciones.find((o) => o.value === value).name}
            onChange={({ option }) =>
              setValue(opciones.find((o) => o.name === option).value)
            }
          />
        </div>
        {games && (
          <Pagination numberItems={games.length} onChange={change} step={12} />
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-3 py-2 mx-2">
        {games ? (
          games
            .slice(page.start - 1, page.end)
            .map((g) => (
              <GameCard
                title={g.title}
                image={g.thumbnail}
                key={g.id}
                platform={g.platform}
                url={g.game_url}
                id={g.id}
                short={`${g.short_description}`}
              />
            ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default withRouter(Games);
