import Banner from "../elements/Banner";
import useGames from "../hooks/useGames";
import { useState } from "react";


const Home = () => {
  const [state] = useState({page_size:4, page:1, ordering:'-rating'});
  const [games] = useGames("games", state , []);
  
  return (
    <div className="Home">
      <h1 className="uppercase text-lg lg:text-3xl text-center font-bold my-3">Bienvenido a Gametrix</h1>
     <Banner data={games} range={{start:13, end:17}} />
     <h1 className="uppercase text-lg lg:text-3xl text-center font-bold my-3 lg:mt-12">Descubre los juegos Free-2-Play más populares</h1>

     <Banner data={games} range={{start:0, end:4}}  />
    </div>
  );
};

export default Home;
