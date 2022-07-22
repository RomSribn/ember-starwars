import { getOwner } from '@ember/application';
import Service, { inject as service } from '@ember/service';
/**
 * @module api
 * @augments ember
 */
export default class Api extends Service {
  @service restApi;
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
        data
      })
      .catch((error) => {
        let errorInfo = {
          error: true,
          status: error.status,
          name: error.name,
          message: error.message
        };
        // eslint-disable-next-line ember/no-private-routing-service
        getOwner(this).lookup('router:main').transitionTo('error', { queryParams: errorInfo });

        return errorInfo;
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
  /**
   * @description Get person from people by id.
   * @function getPerson
   * @returns {object}
   */
  getPerson(id = 1) {
    let url = `/people/${id}`;
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
  /**
   * @description Get starship from starships by id.
   * @function getStarship
   * @returns {object}
   */
  getStarship(id = 1) {
    let url = `/starships/${id}`;
    return this.doRequest(url, 'GET');
  }
}
