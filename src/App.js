import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import { logIn } from './axios/Service';
import HomePage from './components/Home/HomePage';
import axios from 'axios';

if (typeof window !== 'undefined' && localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}

const App = () => {

  const [token, setToken] = useState()
  const [name, setName] = useState()

  useEffect(() => {
    setToken(localStorage.getItem("token") || undefined)
    setName(localStorage.getItem("name") || undefined)
  }, [])

  function signIn(email, password) {
    logIn(email, password, (response) => {
      setName(response.data.user.restaurant.restaurantDetail.name);
      localStorage.setItem("name", response.data.user.restaurant.restaurantDetail.name)
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
    return <HomePage name={name} signOut={signOut}></HomePage>
  }
}

export default App;
