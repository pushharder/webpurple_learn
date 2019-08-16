import { Hit } from "react-instantsearch-core";
import NavLink from "./NavLink";

export interface SearchHit extends Hit<any> {
  slug: string;
  title: string;
  excerpt: string;
};

export interface NavigationHit extends Hit<any> {
  links: NavLink[];
  name: string;
  objectID: string;
  rootTitle: string;
};