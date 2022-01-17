import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard">Dashboard</Route>
      <Route path="/register">Register</Route>
    </Switch>
  );
};
