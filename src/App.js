import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from './components/AppFooter';
import AddStaffDetail from './components/Staff/AddStaffDetail';
import AddPincode from './components/pincode/AddPincode';
import Login from './components/login/Login';
import { logIn } from './axios/Service';
import HomePage from './components/Home/HomePage';
import AddCoupon from './components/Coupon/AddCoupon';
import axios from 'axios';
import UpdateRestaurant from './components/restaurant/UpdateRestaurant';
import ViewStaff from './components/Staff/ViewStaff';
import StaffList from './components/Staff/StaffList';
import ShowPincode from './components/pincode/ShowPincode';
import CouponList from './components/Coupon/CouponList';
import AddMenuItem from './components/Menu/AddMenuItem';

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
          <Route exact path="/add-item" component={AddMenuItem} />
          <Route exact path="/add-coupon" component={AddCoupon} />
          <Route exact path="/add-pincode" component={AddPincode} />
          <Route exact path="/add-info" component={UpdateRestaurant} />
          <Route exact path="/add-staff" component={AddStaffDetail} />
          <Route exact path="/menu" component={Home} />
          <Route exact path="/coupons" component={CouponList} />
          <Route exact path="/pincode" component={ShowPincode} />
          <Route exact path="/info" component={Home} />
          <Route exact path="/staff" component={StaffList} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <AppFooter></AppFooter>
      </>
    )
  }


}

export default App;
