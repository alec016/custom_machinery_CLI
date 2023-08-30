#!/usr/bin/env node
import figlet from 'figlet'
import { program } from './command'
import { Colors } from 'types'

console.log(Colors.Blue + figlet.textSync('CM CLI') + Colors.Clear)

program.parse(process.argv)
