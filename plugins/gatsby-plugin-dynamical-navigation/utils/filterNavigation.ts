import { NavigationNode } from "..";

export default (navigation: NavigationNode[], requiredNodePaths: string[]) => navigation
  .filter(({ path }) => requiredNodePaths
    .some(requiredPath => requiredPath === path))