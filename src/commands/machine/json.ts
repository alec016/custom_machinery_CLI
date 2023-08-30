import { Command } from 'commander'
import { Json } from 'types'
import { createFile } from '../file'

export const mJSON = new Command('json')
  .argument('<namespace>', 'machine namespace')
  .argument('<machine name>', 'machine name')
  .argument('<json>', 'machine json')
  .argument('[path]', 'path where create the machine json(absolute path / relative path)', 'kubejs/data/')
  .option('-f, --force', 'force creation of file', false)
  .description('JSON Machine Generation')
  .action(async (
    namespace: string,
    name: string,
    json: Json,
    path: string,
    opts: {
      force?: boolean
    }
  ) => {
    const content =
      typeof json === 'number'
        ? json.toString()
        : typeof json === 'boolean'
          ? json ? 'true' : 'false'
          : typeof json === 'object' && json === null
            ? 'null'
            : typeof json === 'string'
              ? JSON.stringify(JSON.parse(json), null, 2)
              : JSON.stringify(json, null, 2)
    const file = `${name.split(' ').map(_ => _.toLowerCase()).join('_')}.json`
    path = `${path}${namespace}/machines/`
    console.log({ namespace, name, json, path, opts, file, content })
    const success = await createFile({
      file,
      path,
      content,
      force: opts.force ?? false
    })
    path = path.startsWith('./')
      ? path
      : /^[a-zA-Z]:/.test(path)
        ? path
        : `./${path}`
    console.log(
      success
        ? `"${file}" created successfully at path: "${path}"`
        : `Couldn't create file "${file}" at path: "${path}"`
    )
  })
