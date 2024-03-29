import { NavigationNode } from "..";

export default (requiredNavigation: NavigationNode[]) => Array.from(requiredNavigation)
  .sort(({ path: path1 }, { path: path2 }) => {
    const { length: length1 } = path1.split('/') 
    const { length: length2 } = path2.split('/') 
    
    return length2 - length1
    })