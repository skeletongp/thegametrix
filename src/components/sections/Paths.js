import { Route } from "react-router-dom";

import Games from "../pages/Games";
import Home from "../pages/Home";
import Populars from "../pages/Populars";
import Categories from '../pages/Categories';

const Paths = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/games"> <Games params={{ "sort-by": "alphabetical" }} text="Todos los juegos"/> </Route>
      <Route exact path="/windows"> <Games params={{ "sort-by": "alphabetical", "platform":"pc" }} text="Juegos de Windows"/> </Route>
      <Route exact path="/categories"> <Categories /> </Route>
      <Route path="/bycat" > <Games /> </Route>
      <Route exact path="/browser"> <Games params={{ "sort-by": "alphabetical", "platform":"browser" }} text="Juegos de Navegador"/> </Route>
      <Route exact path="/populars"> <Populars/> </Route>
    
    </div>
  );
};

export default Paths;
