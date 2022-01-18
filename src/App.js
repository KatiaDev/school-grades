import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import Elevi from "./components/Elevi";
import Elev from "./components/Elev";
import Profesori from "./components/Profesori";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/profesori">
          <Profesori />
        </Route>
        <Route exact path="/elevi/:elevId">
          <Elev />
        </Route>
        <Route exact path="/elevi">
          <Elevi />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
