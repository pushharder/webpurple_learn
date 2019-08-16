import NavLink from "./NavLink";

interface NavNode {
  link: NavLink;
  children?: NavNode[];
}

export default NavNode;