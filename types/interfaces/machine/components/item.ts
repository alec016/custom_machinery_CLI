import { ComponentMode, ItemComponentVariant, Config } from 'types'

export interface ItemComponent {
  type: 'custommachinery:item' // x
  mode?: ComponentMode // x
  id?: string // x
  capacity?: number // x
  variant?: ItemComponentVariant // x
  filter?: string | string[] // x
  whitelist?: boolean // x
  config?: Config // x
}
