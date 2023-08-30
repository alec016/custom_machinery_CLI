export interface ButtonElement {
  type: 'custommachinery:button'
  x: number
  y: number
  id: string
  texture?: string
  texture_toggle?: string
  width?: number
  height?: number
  priority?: number
  toggle?: boolean
  text?: string | {
    text: string
    color?: string
  }
  item?: string | {
    id: string
    Count: number
    tag?: string
  }
}
