import { HashRouter as Router, Switch } from "react-router-dom";
import { Grommet } from "grommet";
import Menu from "./components/sections/Menu";
import Paths from "./components/sections/Paths";
function App() {
  return (
    <Grommet plain>
      <Router>
        <div className="sticky w-screen top-0 z-50">
          <Menu />
          
        </div>
        <Switch>
          <Paths />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
