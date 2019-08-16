import * as React from 'react';
import GatsbyLink from 'gatsby-link';

export const navigationLinkClassName = 'navigation-link'

export interface NavigationLinkInterface {
  to: string
  className?: string
}

const NavigationLink: React.FC<NavigationLinkInterface> = ({ to, className, children }) => (
  <GatsbyLink { ...{ 
    to, 
    className: `${navigationLinkClassName}${className ? ` ${className}` : ''}`, 
    activeClassName: 'active' 
  } }>
    {children}
  </GatsbyLink>
)
export default NavigationLink