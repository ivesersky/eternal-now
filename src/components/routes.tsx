import { Switch, Route, Redirect } from 'react-router-dom';
import { About } from '../pages/about';
import { Events } from '../pages/events';
import { Home } from '../pages/home';
import { JoinUs } from '../pages/joinUs';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about"  component={About}></Route>
      <Route path="/events"  component={Events}></Route>
      <Route path="/join-us"  component={JoinUs}></Route>
      <Redirect to="/" />
    </Switch>
  );
}