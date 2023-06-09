import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  damage: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.damage = 'stamina';
    Warrior.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
  
  get energyType(): EnergyType {
    return this.damage;
  }
}