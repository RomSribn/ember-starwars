import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'ember-starwars/config/environment';

export default class RouteRoot extends Route {
  // api = service();
  @service api;

  async model() {
    // const people = await this.api.getPeople();
    // const starships = await this.api.getStarships();
    // console.log(config);
    // return {
    //   people,
    //   starships
    // };
  }
}
