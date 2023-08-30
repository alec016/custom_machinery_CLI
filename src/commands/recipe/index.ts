import { rKubeJS } from './kubejs'
import { Command } from 'commander'
import { rJSON } from './json'
import { rCT } from './craft-tweaker'

export const recipe: Command = new Command('recipe')
  .addCommand(rKubeJS)
  .addCommand(rJSON)
  .addCommand(rCT)
