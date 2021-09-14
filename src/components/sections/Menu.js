import { NavLink } from "react-router-dom";
import logo from "../../assets/gametrix.png";
import Infopop from "../elements/Infopop";

const Menu = () => {
  const items = {
    "/": "Home",
    "/populars": "Populares",
    "/games": "Todos los juegos",
    "/categories": "Categorías",
  };
  return (
    <div className="w-full   h-full py-2  bg-white shadow-xl z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-6 items-center ">
        <div className="col-span-1">
          <img src={logo} alt="Logo" className="w-12" />
        </div>
        <div className="hidden md:flex justify-end col-span-5 space-x-4">
          {Object.keys(items).map(function (key, index) {
            return (
              <NavLink
                key={key}
                activeClassName="text-blue-500 font-bold underline"
                exact
                to={key}
              >
                {items[key]}
              </NavLink>
            );
          })}

          <Infopop text="Plataformas">
            <div className="flex flex-col justify-self-center space-y-1">
              <NavLink
                activeClassName="text-blue-500 font-bold underline"
                className="z-50 px-2 text-lg "
                exact
                to="/windows"
              >
                PC (Windows)
              </NavLink>
              <NavLink
                activeClassName="text-blue-500 font-bold underline"
                className="z-50 px-2  text-lg "
                exact
                to="/browser"
              >
                Web Browser
              </NavLink>
            </div>
          </Infopop>
        </div>
        <div className="flex md:hidden  justify-end col-span-5 z-50 px-4">
          <Infopop text="Menú">
          <div className="flex flex-col justify-self-center space-y-1 px-4 py-2">
            <NavLink
              key={1}
              activeClassName="text-blue-500 font-bold underline"
              exact
               className="z-50 px-2 text-lg "
              to="/"
            >
             Home
            </NavLink>
            <NavLink
              key={1}
              activeClassName="text-blue-500 font-bold underline"
              exact
               className="z-50 px-2 text-lg "
              to="/games"
            >
             Juegos
            </NavLink>
            <NavLink
              key={1}
              activeClassName="text-blue-500 font-bold underline"
              exact
               className="z-50 px-2 text-lg "
              to="/categories"
            >
             Categorías
            </NavLink>
            <NavLink
              key={1}
              activeClassName="text-blue-500 font-bold underline"
              exact
               className="z-50 px-2 text-lg "
              to="/populars"
            >
             Populares
            </NavLink>
            <NavLink
                activeClassName="text-blue-500 font-bold underline"
                className="z-50 px-2 text-lg "
                exact
                to="/windows"
              >
                PC (Windows)
              </NavLink>
              <NavLink
                activeClassName="text-blue-500 font-bold underline"
                className="z-50 px-2  text-lg "
                exact
                to="/browser"
              >
                Web Browser
              </NavLink>
          </div>
          </Infopop>
        </div>
      </div>
    </div>
  );
};

export default Menu;
