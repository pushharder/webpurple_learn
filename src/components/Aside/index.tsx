import React, { useState } from 'react'
import { Navigation } from '../../../plugins/gatsby-plugin-dynamical-navigation';
import StyledAside from './styles';

type Props = {
  navRootPath?: string;
  targetPath?: string;
}

const Aside: React.FC<Props> = (props) => {
  const [width, setWidth] = useState('30rem')

  return (  
    <StyledAside { ...{ width } }>
      <Navigation root={props.navRootPath} location={props.targetPath || '/'} />
    </StyledAside>
  );
};

export default Aside;