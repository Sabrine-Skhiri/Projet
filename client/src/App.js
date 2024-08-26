// App.js
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import WhyUs from './Pages/WhyUs';
import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/user';
import Footer from './Components/Footer'; 
import PublishHouse from './Pages/PublishHouse';
import { HouseProvider } from './Pages/HouseContext'; 
const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  const handleLogout = () => {
    // Logique de déconnexion ici
    localStorage.removeItem("token");
    // Rediriger vers la page de connexion ou la page d'accueil
    window.location.href = '/login';
  };

  return (
    <HouseProvider>
    <AppContainer>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/publishHouse" element={<PublishHouse />} />
      </Routes>
      <Footer onLogout={handleLogout} />
    </AppContainer>
    </HouseProvider>

  );
}

export default App;

