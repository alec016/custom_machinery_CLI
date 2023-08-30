import { Tooltip, Appearance, Processor, Elements, Components } from 'types'

export interface Machine {
  name: string // x
  appearance: Appearance // x
  tooltips?: Tooltip[] | string // x
  processor?: Processor // x
  components?: Components // x
  gui?: Elements
  jei?: Elements
  catalysts?: string[]
}
