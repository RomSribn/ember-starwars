import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RouteRoot extends Route {
  @tracked isLoading = true;

  @action handlePlayerChose() {
    this.isLoading = true;
  }
}
