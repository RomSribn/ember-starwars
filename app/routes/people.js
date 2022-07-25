import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// helpers
import { generateRandom } from 'ember-starwars/helpers/generateRandom';
import { figuringWinner } from 'ember-starwars/helpers/figuringWinner';

export default class PeopleRoot extends Route {
  @service api;
  @service store;

  async loadAllModelsPerPage(modelName, page = 1) {
    const data = await this.store.query(modelName, { page });
    if (data.links.next) {
      await this.loadAllModelsPerPage(modelName, page + 1);
    }
  }

  async model() {
    const people = await this.store.findAll('people');
    const fighters = await Promise.all([
      this.store.findRecord('people', generateRandom(people.count)),
      this.store.findRecord('people', generateRandom(people.count))
    ]);

    console.log(people);

    return { fighters: figuringWinner(fighters) };
  }
}
