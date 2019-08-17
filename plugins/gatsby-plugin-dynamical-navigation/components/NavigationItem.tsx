import * as React from 'react';
import { NavigationLink as INavigationLink } from '..';
import NavigationLink, { navigationLinkClassName } from './NavigationLink';

interface NavigationItemProps extends INavigationLink {
  isDeep: boolean
}

const NavigationItem: React.FC<NavigationItemProps> = ({ path, title, isDeep, children }) => {
  let classNameArray: string[] = []

  if (isDeep) {
    classNameArray.push(`${navigationLinkClassName}_deep`)
  } else {
    classNameArray.push(`${navigationLinkClassName}_node`)
  }

  if (children) {
    classNameArray.push(`${navigationLinkClassName}_target`)
  }

  const className = classNameArray.join(' ')

  return (
    <li key={`item${path}`}>
      <NavigationLink { ...{ className, to: path } }>{title}</NavigationLink>
      {children}
    </li>
  )
}

export default NavigationItem