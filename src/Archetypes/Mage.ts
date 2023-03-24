import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  damage: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.damage = 'mana';
    Mage.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
  
  get energyType(): EnergyType {
    return this.damage;
  }
}