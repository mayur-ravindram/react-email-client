import "./index.css";
import { Main } from "./component/Main";

import { Route, Switch } from "react-router-dom";
import MailList from "./component/MailList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

const Foo = () => {
  return <h1>Foo</h1>;
};

export default App;
