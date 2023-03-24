import Race from './Race';

export default class Elf extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 99;
    Elf.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf.instances;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}