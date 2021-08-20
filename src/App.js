import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from './components/AppFooter';
import ComponentB from './components/ComponentB';
import AddStaffDetail from './components/Staff/AddStaffDetail';
import AddPincode from './components/pincode/AddPincode';
import Login from './components/login/Login';
import { logIn } from './axios/Service';
import HomePage from './components/Home/HomePage';
import AddCoupon from './components/Coupon/AddCoupon';
import axios from 'axios';
import UpdateRestaurant from './components/restaurant/UpdateRestaurant';

if (typeof window !== 'undefined' && localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}

const App = () => {

  const [token, setToken] = useState()

  useEffect(() => {
    setToken(localStorage.getItem("token") || undefined)
  }, [])

  function signIn(email, password) {
    logIn(email, password, (response) => {
      localStorage.setItem("token", response.data.token)
      setToken(response.data.token)
    }, () => {
      alert("Could Not Sign In!")
    })
  }

  function signOut() {
    if (confirm("Are you sure you want to sign out?")) {
      localStorage.removeItem('token')
      setToken()
    }
  }

  if (!token) {
    return <Login signIn={signIn}></Login>
  } else {
    return (
      <>
        <AppNavbar signOut={signOut}></AppNavbar>
        <Switch>
          <Route exact path="/add-item" component={Home} />
          <Route exact path="/add-coupon" component={AddCoupon} />
          <Route exact path="/add-pincode" component={AddPincode} />
          <Route exact path="/add-info" component={UpdateRestaurant} />
          <Route exact path="/add-staff" component={AddStaffDetail} />
          <Route exact path="/menu" component={Home} />
          <Route exact path="/coupons" component={Home} />
          <Route exact path="/pincode" component={Home} />
          <Route exact path="/info" component={Home} />
          <Route exact path="/staff" component={Home} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <AppFooter></AppFooter>
      </>
    )
  }


}

export default App;
