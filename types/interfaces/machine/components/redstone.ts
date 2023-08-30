import { Redstone } from 'types'

export interface RedstoneComponent {
  type: 'custommachinery:redstone'
  powertopause?: Redstone | 16
  idlepoweroutput?: Redstone
  erroredpoweroutput?: Redstone
  comparatorinputtype?: 'custommachinery:item' | 'custommachinery:fuild' | 'custommachinery:energy'
  comparatorinputid?: string
}
