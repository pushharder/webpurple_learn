import getNotNegativeNum from "./getNotNegativeNum";
import getPathLength from "./getPathLength";
import NavLink from "../types/NavLink";

export default (links: NavLink[]) => {
  const [{ path }] = links;
  const rootLinkLehgth = getPathLength(path);

  const subRootNodesEndIndex = getNotNegativeNum(links.
    findIndex(({ path }) => getPathLength(path) > rootLinkLehgth)); 

  const subRootNodes = links.slice(0, subRootNodesEndIndex);
  const subChildrenLinks = links.slice(subRootNodesEndIndex);

  return { subRootNodes, subChildrenLinks }
}
