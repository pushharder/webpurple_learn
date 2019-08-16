import styled from "styled-components";
import { colorVerise, colorWarmPurple, colorLiliac, media, colorVividPurple } from "../../utils/css-utils";
import { Link } from "gatsby";
import { Focus } from "./input";

interface SearchProps {
  focus?: boolean;
}

export const HitHeader = styled.h4`
  color: ${colorVerise};
  font-size: 1.6rem;
`

export const HitLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const HitExcerpt = styled.p`
  font-size: 1.4rem;
`

export const HitsWrapperAnchor = styled.div`
  position: relative;
  height: 4rem;
`

export const HitsWrapperWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-100%);
`

export const HitsWrapperFrame = styled.div`
  position: relative;
  &:before,
    &:after {
      content: '';
      position: absolute;
      height: 2rem;
      left: 0;
      right: 1rem;
      display: block;
      z-index: 1;
      border-radius: 3px;
    }
    &:before {
      top: 0;
      background: linear-gradient(${colorWarmPurple} 15%, transparent); 
    }
    &:after {
      top: 100%;
      transform: translateY(-100%);
      background: linear-gradient(transparent, ${colorWarmPurple} 85%); 
    }
`

export const HitsWrapperUl = styled.ul`
  box-sizing: border-box;
  background-color: ${colorWarmPurple};
  position: relative;
  max-height: 60vh;
  overflow: auto;
  border: 2px solid ${colorWarmPurple};
  border-radius: 3px;
  padding: 1rem;
  &::-webkit-scrollbar {
    width: .6rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colorLiliac};
    border-radius: 3px;
  }
  ${media.tablet`
    width: 50rem;
  `}
`

export const HitsWrapperLi = styled.li`
  &:not(:last-child):after {
    content:'';
    display: block;
    height: 2px;
    background-color: ${colorVividPurple};
    border-radius: 50%;
    width: 100%;
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  height: 4rem;
`;

export const StyledInput = styled.input<Focus>`
  font-size: 1.8rem;
  padding: 1.2rem 1.2rem 1.2rem 4rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${colorWarmPurple};
  &::placeholder {
    color: ${colorWarmPurple};
  }
  transition: width 0.3s;
  width: ${({ focus }) => focus ? '130px' : '70px'};
`

export const StyledForm = styled.form.attrs(() => ({
  onSubmit: (e) => e.preventDefault(),
}))<SearchProps>`
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 100%;
  z-index: 100;
  top: 0;
  transform: translate(-100%, 0);
  background: ${({ focus }) => focus ? colorLiliac : 'transparent'};
  transition: margin-left .3s;
  ${media.desktop`
    top: 50%;
    transform: translate(-100%, -50%);
    margin-left: 4rem
  `}
`