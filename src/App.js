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
        <Route path="/profesori">
          <Profesori />
        </Route>
        <Route path="/elevi/:elevId">
          <Elev />
        </Route>
        <Route path="/elevi">
          <Elevi />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
