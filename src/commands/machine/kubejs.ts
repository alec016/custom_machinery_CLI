import { Command } from 'commander'
import { createFile } from '../file'

export const mKubeJS = new Command('kubejs')
.argument('<namespace>', 'machine namespace')
.argument('<machine name>', 'machine name')
.argument('<version>', 'minecraft version')
.argument('<json>', 'machine json')
.argument('[path]', 'path where create the machine json(absolute path / relative path)', 'kubejs/startup_scripts/')
.option('-f, --force', 'force creation of file', false)
.description('KubeJS Machine Generation')
.action(async (
  namespace: string,
  name: string,
  version: string,
  json: string,
  path: string,
  opts: {
    force?: boolean
  }
) => {
  let content = `\
${
  version.startsWith('1.18')
    ? `onEvent('block.registry', event => {`
    : version.startsWith('1.19')
      ? `StartupEvents.registry('block', event => {`
      : undefined
}
`
  if (!content) throw new Error('Could not create the machine via KubeJS, try with an other version (1.18 / 1.19) or with other method of machine generation')
  const machineName = name.split(' ').map(_ => _.toLowerCase()).join('_')
  content += `\
  event.create('${namespace}:${machineName}', 'custommachinery').machine('${namespace}:${machineName}')
})`
  let file = `${machineName}.js`
  let p = `${path}${namespace}/machines/`
  console.log({ namespace, name, json, path, opts, file, content })
  let success = await createFile({
    file,
    path: p,
    content,
    force: opts.force ?? false
  })
  p = p.startsWith('./')
    ? p
    : /^[a-zA-Z]:/.test(p)
      ? p
      : `./${p}`
  console.log(
    success
      ? `"${file}" created successfully at path: "${p}"`
      : `Couldn't create file "${file}" at path: "${p}"`
  )

  file = `${machineName}.json`
  path = `${path}../data/${namespace}/machines`
  success = await createFile({
    file,
    path,
    content: JSON.stringify(JSON.parse(json), null, 2),
    force: opts.force ?? false
  })
  console.log(
    success
      ? `"${file}" created successfully at path: "${path}"`
      : `Couldn't create file "${file}" at path: "${path}"`
  )
})
