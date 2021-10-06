import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductsList from './pages/ProductsList';

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
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/product/:productId">
            <User />
          </Route>
          <Route path="/newProduct">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
