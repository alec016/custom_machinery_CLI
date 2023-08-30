import { Command } from 'commander'
import { Json } from 'types'
import { createFile } from '../file'

export const rKubeJS = new Command('kubejs')
  .argument('<namespace>', 'machine namespace')
  .argument('<json>', 'recipe json')
  .description('KubeJS Recipe Generation')
  .action((namespace: string, json: Json) => {
    console.log({ json, namespace })
  })
