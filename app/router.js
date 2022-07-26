import EmberRouter from '@ember/routing/router';
import config from 'ember-starwars/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('people');
  this.route('starships');
  this.route('index', { path: '/' });
});
