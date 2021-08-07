import "./index.css";
import { Main } from "./component/Main";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bg-green-200 mx-auto">
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <div className="hidden">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
