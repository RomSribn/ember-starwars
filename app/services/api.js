import { getOwner } from '@ember/application';
import Service, { inject as service } from '@ember/service';
/**
 * @module api
 * @augments ember
 */
export default class Api extends Service {
  restApi = service({}, 'rest-api');
  /**
   * @description Helper function which makes a request.
   * @function doRequest
   * @param url {string} Request URL.
   * @param method {string} A request method.
   * @param data {object} Data object.
   * @returns {*}
   */
  doRequest(url, method, data = {}) {
    return this.restApi
      .request(url, {
        method,
        data,
      })
      .catch((error) => {
        let errorInfo = {
          status: error.status,
          name: error.name,
          message: error.message,
        };
        getOwner(this).transitionTo('error', { queryParams: errorInfo });
      });
  }
  /*   People   */
  /**
   * @description Get people array (17 on the page).
   * @function getPeople
   * @returns {object}
   */
  getPeople(page = 1) {
    let url = `/people/?page=${page}`;
    return this.doRequest(url, 'GET');
  }
  /*   Starships   */
  /**
   * @description Get starships array (17 on the page).
   * @function getStarships
   * @returns {object}
   */
  getStarships(page = 1) {
    let url = `/starships/?page=${page}`;
    return this.doRequest(url, 'GET');
  }
}
