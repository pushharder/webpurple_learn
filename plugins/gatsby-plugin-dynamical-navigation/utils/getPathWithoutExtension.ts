const separator = '.'

export default (path: string) => path
  .split(separator)
  .slice(0, -1)
  .join(separator)