export default (relativeLocation: string, root: string) => relativeLocation.split('/')
.reduce<string[]>((result, item) => {
  if (item) {
    return [
      ...result,
      `${result.slice(-1)[0]}${item}/`
    ]
  }
  
 return result
}, [root])