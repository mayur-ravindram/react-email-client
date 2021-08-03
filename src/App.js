import "./index.css";
import { Main } from "./component/Main";

import { Route, Switch } from "react-router-dom";
import MailList from "./component/MailList";

function App() {
  return (
    <div className="my-auto bg-gray-800">
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

const Foo = () => {
  return <h1>Foo</h1>;
};

export default App;
