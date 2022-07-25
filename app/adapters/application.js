import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  host = 'https://swapi.dev';
  get headers() {
    return {
      accept: 'application/json'
    };
  }
  _buildURL(modelName, id) {
    return super._buildURL(modelName, id) + '/';
  }
}
