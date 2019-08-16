import styled from "styled-components";
import { Link } from "gatsby";
import { media, colorLipstick } from "../../utils/css-utils";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  min-width: 30rem;
  ${media.phone`
    margin-left: 2rem;
  `}
  ${media.desktop`
    margin-left: 0;
  `}
`
export const StyledTitle = styled.span`
  font-size: 2.6rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colorLipstick};
`