import Race from './Race';

export default class Dwarf extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 80;
    Dwarf.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}