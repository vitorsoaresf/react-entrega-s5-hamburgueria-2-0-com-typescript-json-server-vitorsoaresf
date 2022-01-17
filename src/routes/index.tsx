import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Route } from "./Route";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/register" component={Register} />
    </Switch>
  );
};
