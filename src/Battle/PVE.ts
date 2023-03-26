import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  player: Fighter;
  environment: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, environment: Fighter[] | SimpleFighter[]) {
    super(player);
    this.player = player;
    this.environment = environment;
  }

  fight(): number {
    this.environment.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}