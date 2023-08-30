import { Command } from 'commander'
import { Json } from 'types'
import { createFile } from '../file'

export const rCT = new Command('ct')
  .argument('<namespace>', 'machine namespace')
  .argument('<json>', 'recipe json')
  .description('CraftTweaker Recipe Generation')
  .action((namespace: string, json: Json) => {
    console.log({ json, namespace })
  })
