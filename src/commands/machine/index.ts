import { mKubeJS } from './kubejs'
import { Command } from 'commander'
import { mJSON } from './json'

export const machine: Command = new Command('machine')
  .addCommand(mKubeJS)
  .addCommand(mJSON)
