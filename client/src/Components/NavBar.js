// src/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <NavLeft>
                <Logo src="logo.png" alt="Logo" /> 
                <Brand>FIND YOUR HOME </Brand>
                
            </NavLeft>
            <NavMenu>
                <NavItem><a href="#features">Pourquoi nous? </a></NavItem>
               
            </NavMenu>
            
            <ContactButton>Se connecter</ContactButton>
            <button> PUBLIER UNE ANNONCE </button>
        </Nav>
    );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 40px;
    margin-right: 10px;
`;

const Brand = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
`;

const Beta = styled.span`
    background-color: #e0e0e0;
    color: #333;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.9rem;
`;

const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
`;

const NavItem = styled.li`
    a {
        color: #333;
        text-decoration: none;
        font-size: 1rem;
    }

    a:hover {
        color: #000;
    }
`;

const ContactButton = styled.button`
    background-color: #ff5722;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #e64a19;
    }
`;
