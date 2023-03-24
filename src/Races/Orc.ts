import Race from './Race';

export default class Orc extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 74;
    Orc.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc.instances;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}