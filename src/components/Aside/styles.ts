import styled from "styled-components";
import { colorWarmPurple, colorVerise, colorWarmGrey, media } from "../../utils/css-utils";

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

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    &>ul a {
      display: flex;

      &:before {
        content: "\\00A7";
        margin-right: 1rem;
      }
    }
  }

  & a {
    text-decoration: none;
  }

  & .nav-root-link {
    box-sizing: border-box;
    font-style: italic;
    font-weight: bold;
    color: ${colorWarmPurple};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    &.active {
      color: ${colorVerise};
    }

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
  & .node {
    padding: 0 0 1rem 1rem;

    & a {
      color: ${colorWarmPurple};
      font-weight: bold;
    }

    &__target {
      & a {
        color: ${colorVerise};
      }
      
      &>a {
        display: block;
        padding-bottom: 1rem;
      }

      & .node {
        padding-bottom: .5rem;
        width: 25rem;

        & a {
          &:not(.active) {
            color: ${colorWarmGrey};
            font-weight: normal;
          }
        }
        ${media.desktop`
          min-width: auto;
        `}
      }
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