import {
  ConfigElement,
  ButtonElement,
  ChemicalElement,
  DumpElement,
  EnergyElement,
  FluidElement,
  FuelElement,
  HeatElement,
  PlayerInventoryElement,
  ProgressElement,
  ResetElement,
  SizeElement,
  SlotElement,
  StatusElement,
  TextElement,
  TextureElement
} from './elements/'

export type Elements = (
  ConfigElement | // x b e
  ButtonElement | // x b
  ChemicalElement | // x b
  DumpElement | // x b
  EnergyElement | // x b
  FluidElement | // x b
  FuelElement | // x b
  HeatElement | // x b
  PlayerInventoryElement | // x b
  ProgressElement | // x b
  ResetElement | // x b
  SizeElement | // x b
  SlotElement | // x b
  StatusElement | // x b
  TextElement | // x b
  TextureElement // x b
)[]
