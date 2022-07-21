import AjaxService from 'ember-ajax/services/ajax';
import config from 'ember-starwars/config/environment';

/** @name api*/
export default AjaxService.extend({
  host: config.apiUrl,
  contentType: 'application/json',
  processData: false,
  init() {
    this._super(...arguments);
  },
});
