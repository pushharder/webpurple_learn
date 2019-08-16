import React, { FocusEvent } from 'react'
import styled from 'styled-components'
import { colorWarmPurple } from '../../utils/css-utils';

const SearchIcon: React.FC = props => (
  <svg
    {...props}
    tabIndex={-1}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    enableBackground="new 0 0 512 512">
    <g>
      <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" />
    </g>
  </svg>
)

export default styled(SearchIcon)`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  fill: ${colorWarmPurple};
  position: absolute;
  left: 1rem;
  top: 1rem;
  outline: none;
`