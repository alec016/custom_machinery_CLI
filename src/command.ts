import { Command } from 'commander'
import { machine } from './commands/machine'
import { recipe } from './commands/recipe'

// Declare program
export const program: Command = new Command('cm')
  .addCommand(machine)
  .addCommand(recipe)
