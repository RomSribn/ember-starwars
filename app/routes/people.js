import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// helpers
import { generateRandom } from 'ember-starwars/helpers/generateRandom';
import { figuringWinner } from 'ember-starwars/helpers/figuringWinner';

export default class PeopleRoot extends Route {
  @service api;
  async model() {
    const people = await this.api.getPeople();
    const fighters = await Promise.all([
      this.api.getPerson(generateRandom(people.count)),
      this.api.getPerson(generateRandom(people.count))
    ]);
    return { fighters: figuringWinner(...fighters) };
  }
}
