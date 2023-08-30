export interface Processor {
  type: 'custommachinery:machine' | 'custommachinery:craft'
  cooldown?: number
}
