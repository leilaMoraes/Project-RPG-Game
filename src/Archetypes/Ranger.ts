import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  damage: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.damage = 'stamina';
    Ranger.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
  
  get energyType(): EnergyType {
    return this.damage;
  }
}