import "./index.css";
import { Main } from "./component/Main";

import { Route, Switch } from "react-router-dom";
import MailList from "./component/MailList";

function App() {
  return (
    <div className="container mx-auto my-auto">
      <Switch>
        <Route path="/">
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
