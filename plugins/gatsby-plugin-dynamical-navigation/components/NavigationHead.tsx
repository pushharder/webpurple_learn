import * as React from "react";
import NavigationLink, { navigationLinkClassName, NavigationLinkInterface } from "./NavigationLink";

const NavigationHead: React.FC<NavigationLinkInterface> = (props) => 
  (<NavigationLink { ...{ ...props, className: `${navigationLinkClassName}_head` } } />)

export default NavigationHead