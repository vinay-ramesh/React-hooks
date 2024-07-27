import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UseStateComponent from "./hooks/UseStateComponent";
import UseEffectComponent from "./hooks/UseEffectComponent";
import HookLists from "./HookLists";
import UseContextComponent from "./hooks/UseContextComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/display" />
        </Route>
        <Route path="/display" component={HookLists} exact={true} />
        <Route path={"/useState-hook"} component={UseStateComponent} exact />
        <Route path={"/useEffect-hook"} component={UseEffectComponent} exact />
        <Route
          path={"/useContext-hook"}
          component={UseContextComponent}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
