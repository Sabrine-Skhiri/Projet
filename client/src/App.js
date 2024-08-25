import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
   
    if (localStorage.getItem("token")) {
      dispatch(current());}
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
