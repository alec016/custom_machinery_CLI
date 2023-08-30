import { TextAlignment } from 'types'

export interface TextElement {
  type: 'custommachinery:text'
  text: string
  x: number
  y: number
  priority?: number
  alignment?: TextAlignment
  color?: number
  jei?: boolean
}
