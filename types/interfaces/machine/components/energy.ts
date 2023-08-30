import { Config } from 'types'

export interface EnergyComponent {
  type: 'custommachinery:energy'
  capacity?: number // x
  max_input?: number // x
  max_output?: number // x
  config?: Config // x
}
