import * as React from 'react';
import NavigationHead from './NavigationHead';
import NavigationList from './NavigationList';
import getRequiredPaths from '../utils/getRequiredPaths'
import filterNavigation from '../utils/filterNavigation'
import sortNavigation from '../utils/sortNavigation'
import { loadNavigation } from '..';

interface NavigationProps {
  root?: string
  location: string
}

const NavigationComponent: React.FC<NavigationProps> = ({ root = '/', location }) => {
  const [isNavNotLoaded, setIsNavNotLoaded] = React.useState(true)
  const navigation = loadNavigation(isNavNotLoaded, () => setIsNavNotLoaded(false))
  
  if (!navigation) {
    return (<span>Navigation is not loaded</span>)
  }

  const relativeLocation = location.replace(root, '')
  const requiredNodePaths = getRequiredPaths(relativeLocation, root)
  const requiredNavigation = filterNavigation(navigation, requiredNodePaths)
  const sortedNavigation = sortNavigation(requiredNavigation)

  const [component] = sortedNavigation
  .reduce<[ 
    JSX.Element,
    string 
   ] | [null]>(([component, rootPath], { path, title: rootTitle, childrenSiteNavigation }, i) => {

    const resultComponent = (
      <>
      {i >= sortedNavigation.length - 1 && <NavigationHead to={path}>{rootTitle}</NavigationHead>}
      <NavigationList { ...{ 
        isDeep: !component,
        rootPath, 
        childrenSiteNavigation, 
        children: component 
      } }></NavigationList>
      </>
    )

    return [
      resultComponent,
      path  
    ]
  }, [null])

  return component
}

export default NavigationComponent