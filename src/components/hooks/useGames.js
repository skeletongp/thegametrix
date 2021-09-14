import { useEffect, useState } from "react";
import { get } from "axios";

const useGames = (uri, params ) => {
  const [games, setGame] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    get(
      `${process.env.REACT_APP_BASE_URL}${uri}`, 
      {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY ,
           'Content-Type': 'application/json',
           'x-rapidapi-host': process.env.REACT_APP_API_HOST,
        },
        params:params
      }
    )
      .then(({ data }) => {
        setGame(data)
      })
      .catch((err) => {
        setError(err)
      });
  }, [uri, params]);
  return [games, error];
};

export default useGames;
