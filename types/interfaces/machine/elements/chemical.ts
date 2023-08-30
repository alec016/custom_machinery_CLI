export interface ChemicalElement {
  type: 'custommachinery:gas' | 'custommachinery:infusion' | 'custommachinery:pigment' | 'custommachinery:slurry'
  x: number
  y: number
  id: string
  width?: number
  height?: number
  priority?: number
  texture?: string
  highlight?: boolean
}
