// Footer.js
import React from 'react';
import { connect } from 'react-redux';
import { logout } from"../JS/Actions/user";

const Footer = ({ logout }) => {
  const footerStyle = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f8f9fa',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid #dee2e6'
  };

  const footerTextStyle = {
      margin: 0,
      fontSize: '14px',
      color: '#6c757d'
  };

  const logoutButtonStyle = {
      backgroundColor: '#e64a19',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      fontSize: '14px',
      cursor: 'pointer',
      borderRadius: '3px'
  };

  const logoutButtonHoverStyle = {
      backgroundColor: '#d84315'
  };

  const handleMouseEnter = (e) => {
      e.target.style.backgroundColor = logoutButtonHoverStyle.backgroundColor;
  };

  const handleMouseLeave = (e) => {
      e.target.style.backgroundColor = logoutButtonStyle.backgroundColor;
  };

  return (
      <footer style={footerStyle}>
          <p style={footerTextStyle}>© 2024 FIND YOUR HOME. Tous droits réservés.</p>
          <button
              style={logoutButtonStyle}
              onClick={logout}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          >
              Déconnexion
          </button>
      </footer>
  );
};

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(Footer);