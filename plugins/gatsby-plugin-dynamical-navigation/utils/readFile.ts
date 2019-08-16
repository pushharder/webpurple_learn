import fs from 'fs'

export default (path: string) => {
  let result: string;

  try {
    result = fs.readFileSync(path, 'utf8');
  } catch (e) {
    console.log(e)
    result = ''
  }

  return result
}
