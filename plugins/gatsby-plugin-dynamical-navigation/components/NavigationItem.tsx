import * as React from 'react';
import { NavigationLink as INavigationLink } from '..';
import NavigationLink, { navigationLinkClassName } from './NavigationLink';

interface NavigationItemProps extends INavigationLink {
  isDeep: boolean
}

const NavigationItem: React.FC<NavigationItemProps> = ({ path, title, isDeep, children }) => {
  return (
    <li key={`item${path}`}>
      <NavigationLink className={isDeep ? '' : `${navigationLinkClassName}_node`} to={path}>{title}</NavigationLink>
      {children}
    </li>
  )
}

export default NavigationItem