import { Command } from 'commander'
import { Json } from 'types'
import { createFile } from '../file'

export const rJSON = new Command('json')
  .argument('<namespace>', 'machine namespace')
  .argument('<json>', 'json json')
  .description('JSON Recipe Generation')
  .action((namespace: string, json: Json) => {
    console.log({ json, namespace })
  })
