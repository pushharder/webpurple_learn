import React from 'react'
import { GatsbyLinkProps } from 'gatsby';
import { Location } from '@reach/router'
import { StyledUl, NavbarItem, StyledLink } from './styles';

const isNavLinkActive = ( pathname: string, to: string ) => pathname.match(new RegExp(`^${to}`)) && to !== '/' || pathname === to;

const NavLink: React.FC<GatsbyLinkProps<null>> = ({ to, children }) => (
  <Location>
    {({ location: { pathname } }) => (<StyledLink className={isNavLinkActive(pathname, to) ? "active": ''} to={to}>{children}</StyledLink>)}
  </Location>
)

const Navbar: React.FC = () => {
  return (
    <nav>
      <StyledUl>
      <NavbarItem>
        <NavLink to="/">главная</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/externals/">внешние курсы</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/dictionaries/">справочники</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/lectures/">лекции</NavLink>
      </NavbarItem>
      </StyledUl>
    </nav>
  )
}

export default Navbar;
