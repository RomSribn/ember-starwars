import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// helpers
import { generateRandom } from 'ember-starwars/helpers/generateRandom';
import { figuringWinner } from 'ember-starwars/helpers/figuringWinner';

export default class StarshipsRoot extends Route {
  @service api;
  async model() {
    const starships = await this.api.getStarships();
    const fighters = await Promise.all([
      this.api.getStarship(generateRandom(starships.count)),
      this.api.getStarship(generateRandom(starships.count))
    ]);
    return { fighters: figuringWinner(...fighters) };
  }
}
