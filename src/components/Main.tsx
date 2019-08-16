import React from 'react';
import styled from 'styled-components';
import { colorGreyishBrown, media } from '../utils/css-utils';

export default styled.main`
  color: ${colorGreyishBrown};
  padding: 2rem;
  box-sizing: border-box;
  overflow: auto;
  width: 100%;
  margin-left: 20rem;

  & h1 {
    text-align: center;
  }

  & a {
    color: #1578d0;
  }

  ${media.desktop`
    margin-left: 0;
  `}
`