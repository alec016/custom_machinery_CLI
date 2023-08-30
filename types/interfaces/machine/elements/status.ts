export interface StatusElement {
  type: 'custommachinery:status'
  x: number
  y: number
  width?: number
  height?: number
  priority?: number
  idleTexture?: string
  runningTexture?: string
  erroredTexture?: string
}
