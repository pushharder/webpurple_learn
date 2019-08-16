import React from 'react'
import LogoIcon from './LogoIcon';
import { StyledLink, StyledTitle } from './styles';

const Logo: React.FC = () => {
  return (
    <StyledLink to="/">
      <LogoIcon />
      <StyledTitle>webpurple learn</StyledTitle>
    </StyledLink>
  )
}

export default Logo;