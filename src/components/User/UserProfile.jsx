import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fcfbfb;
  color: #090909;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-right: auto;
  padding: 10px 20px;
  color: #2e1d92;
`;

const LogoLink = styled(Link)`
  color: #da3437;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled.li`
  margin-left: 20px;
  position: relative;
`;

const NavLink = styled(Link)`
  color: #0f07ec;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #0f07ec;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const NavBar = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail('');
  };

  return (
    <Nav>
      <NavContainer>
        <NavLinks>
          {userEmail ? (
            <>
              <NavLinkItem>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                <span>Logged in as: {userEmail}</span>
              </NavLinkItem>
            </>
          ) : (
            <NavLinkItem>
            </NavLinkItem>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
