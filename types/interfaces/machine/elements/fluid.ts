export interface FluidElement {
  type: 'custommachinery:fluid'
  x: number
  y: number
  id: string
  width?: number
  height?: number
  priority?: number
  texture?: string
  highlight?: boolean
}
