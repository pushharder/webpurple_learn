import React from 'react'
import Logo from '../Logo';
import Navbar from '../Navbar';
import Search from '../Search';
import { StyledHeader } from './styles';

const Header: React.FC = () => (
  <StyledHeader>
    <Logo />
    <Navbar />
    <Search />
  </StyledHeader>
);

export default Header;