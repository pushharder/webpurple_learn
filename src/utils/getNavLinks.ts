import Navigation from "../types/Navigation";

export default (nav: Navigation) => nav.map(({ node: { fields: { slug: path }, frontmatter: { title } } }) => ({ title, path }));