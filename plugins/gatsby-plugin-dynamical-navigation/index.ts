export interface NavigationLink {
  path: string
  title: string
}

export interface ChildSiteNavigation extends NavigationLink {
  order?: number
}

export interface NavigationNode extends NavigationLink {
  childrenSiteNavigation: ChildSiteNavigation[]
}

export interface NavigationDataItem {
  node: NavigationNode
}

let currentNavigation: NavigationNode[] | null = null

export const loadNavigation = (
  isNavNotLoaded: boolean,
  setIsNavNotLoaded: () => void
  ) => {
    if (isNavNotLoaded && !currentNavigation) {
      fetch('/site-navigation.json')
      .then(data => data.json())
      .then(navigation => {
        currentNavigation = navigation
        setIsNavNotLoaded()
      })
    }
    
    return currentNavigation
  }

export { default as Navigation } from './components/NavigationComponent'