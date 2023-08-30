import { Config } from 'types'

export interface ContraptionComponent {
  type: 'custommachinery:contraption'
  stress_impact?: number // x
  config?: Config // x
}
