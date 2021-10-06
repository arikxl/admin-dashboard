import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.scss';
import Home from './pages/Home';
import User from './pages/User';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import NewUser from './pages/NewUser';
import Product from './pages/Product';
import UserList from './pages/UserList';
import NewProduct from './pages/newProduct';
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
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
