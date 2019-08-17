import styled, { createGlobalStyle } from "styled-components";
import { colorWarmPurple, colorVerise, colorWarmGrey, media } from "../../utils/css-utils";

export const NavigationStyle = createGlobalStyle`
  .navigation-link {
    text-decoration: none;
    display: flex;

    &_deep {
      color: ${colorWarmGrey};
      font-weight: normal;

      &:before {
        content: "\\00A7";
        margin-right: 1rem;
      }
    }

    &_head {
      box-sizing: border-box;
      font-style: italic;
      font-weight: bold;
      color: ${colorWarmPurple};
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      &:before, &:after {
        content: '';
        width: 100%;
        background-color: currentColor;
        height: 2px;
      }

      &:before {
        margin-right: 1rem;
      }

      &:after {
        margin-left: 1rem;
      }
    }

    &_node {
      padding: 0 0 1rem 1rem;
      color: ${colorWarmPurple};
      font-weight: bold;
    }
  
    &_target {
      color: ${colorVerise};
      display: block;
      padding-bottom: 1rem;
    }

    &.active {
      color: ${colorVerise};
    }
  }  

  .navigation-list {
    list-style: none;
    padding: 0 0 1rem 1rem;
  }
`

const StyledAside = styled.aside<{ width?: string }>`
  width: 20rem;
  padding: 2rem;
  border-right: 2px solid ${colorWarmPurple}2e; 
  box-sizing: border-box;
  overflow-x: hidden;
  position: absolute;
  background-color: #fff;
  z-index: 100;
  transition: width .3s;
  height: 100%;

  &:before, &:after {
    position: absolute;
  }

  &:before {
    content: '';
    background: linear-gradient(to right, transparent, #fff);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:after {
    content: "\\21E8";
    top: 25%;
    font-size: 5rem;
    color: #c788fe;
    right: 0;
    margin-right: 2rem;
    animation: arrow  2.5s infinite;
  }

  &:hover {
    width: ${({ width }) => width};

    &:before, &:after {
      display: none;
    }
  }

  ${media.desktop`
    width: 20%;
    min-width: 30rem;
    position: static;

    &:before, &:after {
      display: none;
    }
  `}
  @keyframes arrow {
    from {margin-right: 2rem; opacity: 0;}
    60% {margin-right: 2rem; opacity: 0;}
    70% {opacity: 1;}
    to {margin-right: 0; opacity: 0;}
    }
`

export default StyledAside