import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <NavLeft>
                <Logo src="/images/logo.png" /> 
                <Brand>
                    <StyledLink to='/'>FIND YOUR HOME</StyledLink>
                </Brand>
            </NavLeft>
            <NavRight>
                <NavMenu>
                    <NavItem>
                        <StyledLink to="/whyUs">Pourquoi nous?</StyledLink>
                    </NavItem>
                </NavMenu>
                <Link to="/register">
                    <ContactButton>S'inscrire</ContactButton>
                </Link>
                <Link to="/login">
                    <ContactButton>Se connecter</ContactButton>
                </Link>
                <PublishButton ><Link to= "/publishHouse">PUBLIER UNE ANNONCE</Link></PublishButton>
            </NavRight>
        </Nav>
    );
};

export default Navbar;

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

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Logo = styled.img`
    height: 60px; 
    margin-right: 10px;
`;

const Brand = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
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

const PublishButton = styled.button`
    background-color: transparent;
    color: black;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
