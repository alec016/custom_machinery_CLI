import { ComponentMode, Config } from 'types'

export interface ChemicalComponent {
  type: 'custommachinery:gas' | 'custommachinery:infusion' | 'custommachinery:pigment' | 'custommachinery:slurry'
  capacity: number
  id: string
  max_input?: number
  max_output?: number
  filter?: string | string[]
  whitelist?: boolean
  mode?: ComponentMode
  config?: Config
}
