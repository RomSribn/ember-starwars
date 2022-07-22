import AjaxService from 'ember-ajax/services/ajax';
// import config from 'ember-starwars/config/environment';

/** @name api*/
export default AjaxService.extend({
  host: 'https://swapi.dev/api',
  contentType: 'application/json',
  processData: false,
  init() {
    this._super(...arguments);
  }
});
