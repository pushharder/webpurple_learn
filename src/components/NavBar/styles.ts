import styled from "styled-components";
import { Link } from "gatsby";
import { colorWarmGrey, media, colorLipstick } from "../../utils/css-utils";

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2.3rem;
  font-weight: 500;
  color: ${colorWarmGrey};
  ${media.tablet`
    font-size: 1.8rem;
  `};
  padding: 1.2rem 0;
  border: solid transparent;
  border-width: .3rem 0;
  transition: border-color 1s ease-out;
  display: inline-block;

  &:hover,
  &.active {
    border-bottom-color: ${colorLipstick};
  }
`

export const NavbarItem = styled.li`
  list-style: none;
  margin-bottom: 2.5rem;
  ${media.tablet`margin: 0 2rem`};
`

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10rem 7.5rem;
  padding: 0;
  ${media.phone`
      margin: 10rem 4rem;
    `
  }
  ${media.tablet`
      margin: 0;
      flex-direction: row;
    `
  }
  ${media.desktop`
      margin: 0 4rem;
    `
  }
`