import styled from "styled-components";
import { media } from "../../utils/css-utils";

export const StyledHeader = styled.header`
margin: 2rem;
display: flex;
flex-direction: column;
position: relative;
${media.tablet`
  justify-content: center;
  margin: 4rem 2rem;
`}
${media.desktop`
  margin: 4rem 8.6rem;
  flex-direction: row;
  justify-content: flex-start;
`}
`;