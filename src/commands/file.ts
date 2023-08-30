import fs from 'fs'

type CreateFileParams = {
  file: string
  content: string | NodeJS.ArrayBufferView
  path?: string
  force?: boolean
}

export const createFile = async ({ file, path = './', force = false, content }: CreateFileParams) => {
  try {
    if (!path.endsWith('/') && !file.startsWith('/')) path += '/'
    const paths = path.split('/')
    let prevPaths = ''
    paths.forEach(path => {
      if (prevPaths !== '') {
        if (!fs.existsSync(prevPaths + '/' + path)) {
          fs.mkdirSync(prevPaths + '/' + path)
        }
      } else {
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path)
        }
      }
      prevPaths += path + '/'
    })
    if (!force) {
      if (fs.existsSync(`${path}${file}`)) return true
      fs.writeFileSync(`${path}${file}`, content)
      return true
    }
    if (fs.existsSync(`${path}${file}`)) fs.rmSync(`${path}${file}`, { force: true })
    fs.writeFileSync(`${path}${file}`, content)
    return true
  } catch (_) {
    console.error(_)
    return false
  }
}
