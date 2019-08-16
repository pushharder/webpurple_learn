import getPathWithoutExtension from "./getPathWithoutExtension";

export default (path: string) => `${getPathWithoutExtension(path)
  .replace(/\\/g, '/')
  .replace(/^src\/pages|\/index$/g, '')}/`