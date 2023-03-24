import Race from './Race';

export default class Halfling extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
    Halfling.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.instances;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}