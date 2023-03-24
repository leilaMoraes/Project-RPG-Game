import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  damage: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.damage = 'mana';
    Necromancer.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
  
  get energyType(): EnergyType {
    return this.damage;
  }
}