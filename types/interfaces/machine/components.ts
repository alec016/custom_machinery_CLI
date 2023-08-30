import {
  EnergyComponent,
  FluidComponent,
  ItemComponent,
  RedstoneComponent,
  ChemicalComponent,
  ContraptionComponent,
  HeatComponent
} from './components/'

export type Components = (
  ItemComponent |
  FluidComponent |
  EnergyComponent |
  RedstoneComponent |
  ChemicalComponent |
  ContraptionComponent |
  HeatComponent
)[]
