import { ComponentMode, Config } from 'types'

export interface FluidComponent {
  type: 'custommachinery:fluid' // x
  mode?: ComponentMode // x
  capacity?: number // x
  id?: string // x
  max_input?: number // x
  max_output?: number // x
  filter?: string | string[] // x
  whitelist?: boolean // x
  config?: Config // x
}
