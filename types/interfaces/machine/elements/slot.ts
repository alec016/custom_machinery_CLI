export interface SlotElement {
  type: 'custommachinery:slot'
  x: number
  y: number
  id: string
  width?: number
  height?: number
  priority?: number
  texture?: string
  ghost?: string | {
    items: string
    color?: [number, number, number, number]
    always_render?: boolean
  }
}
