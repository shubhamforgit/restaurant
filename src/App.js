import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from './components/AppFooter';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';


const App = () => {
  return (
    <>
      <AppNavbar></AppNavbar>
      <Switch>
        <Route exact path="/add-item" component={ComponentA} />
        <Route exact path="/add-coupon" component={ComponentB} />
        <Route exact path="/add-pincode" component={Home} />
        <Route exact path="/add-info" component={Home} />
        <Route exact path="/add-staff" component={Home} />
        <Route exact path="/menu" component={Home} />
        <Route exact path="/coupons" component={Home} />
        <Route exact path="/pincode" component={Home} />
        <Route exact path="/info" component={Home} />
        <Route exact path="/staff" component={Home} />
      </Switch>
      <AppFooter></AppFooter>
    </>
  )

}

export default App;
