import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import UserList from './pages/UserList';

function App() {
  return (
    <Router >
      <TopBar />
      <div className="container flex">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
