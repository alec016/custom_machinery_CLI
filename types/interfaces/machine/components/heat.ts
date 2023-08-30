import { Config } from 'types'

export interface HeatComponent {
  type: 'custommachinery:heat'
  capacity?: number
  base_temp?: number
  conduction?: number
  insulation?: number
  config?: Config // x
}
