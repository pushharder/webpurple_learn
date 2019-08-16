import React from 'react';
import Hit from './Hit';
import { SearchHit } from '../../types/Hits';
import { HitsWrapperAnchor, HitsWrapperWrapper, HitsWrapperFrame, HitsWrapperUl } from './styles';

interface Props {
  hits: SearchHit[];
}

const HitsWrapper: React.FC<Props> = ({ hits }) => {
  return (
    <HitsWrapperAnchor>
      <HitsWrapperWrapper>
        <HitsWrapperFrame>
          <HitsWrapperUl>
            {hits.map((hit, i) => (<StiledLi key={`hit${i}`}><Hit { ...hit } /></StiledLi>))}
          </HitsWrapperUl>
        </HitsWrapperFrame>
      </HitsWrapperWrapper>
    </HitsWrapperAnchor>
  )
}

export default HitsWrapper;