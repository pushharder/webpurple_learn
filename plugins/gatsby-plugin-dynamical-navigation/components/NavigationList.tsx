import * as React from 'react'
import { ChildSiteNavigation } from '..';
import NavigationItem from './NavigationItem';

interface NavigationListProps {
  isDeep: boolean
  rootPath?: string
  childrenSiteNavigation: ChildSiteNavigation[]
}

const navigationListClassName = 'navigation-list'

const NavigationList: React.FC<NavigationListProps> = ({
  childrenSiteNavigation,
  rootPath = '/',
  isDeep,
  children
}) => {
  return (
    <ul className={navigationListClassName}>
      {Array.from(childrenSiteNavigation)
      .sort((
        { order: order1 = Number.MAX_SAFE_INTEGER }, 
        { order: order2 = Number.MAX_SAFE_INTEGER }
      ) => order1 - order2)
      .map(({ path: to, title }) => (<NavigationItem { ...{ path: to, title, isDeep } }>
        {to === rootPath && children}
      </NavigationItem>))}
    </ul>
  )
}

export default NavigationList