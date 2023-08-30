import { MachineDumpComponent } from 'types'

export interface DumpElement {
  type: 'custommachinery:dump'
  x: number
  y: number
  id: string
  width?: number
  height?: number
  priority?: number
  texture?: string
  component?: MachineDumpComponent | MachineDumpComponent[]
}
