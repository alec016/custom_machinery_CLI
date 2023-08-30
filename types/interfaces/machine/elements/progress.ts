import { ProgressDirection } from 'types'

export interface ProgressElement {
  type: 'custommachinery:progress'
  x: number
  y: number
  width?: number
  height?: number
  priority?: number
  emptyTexture?: string
  filledTexture?: string
  direction?: ProgressDirection
}
