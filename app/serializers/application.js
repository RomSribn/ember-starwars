import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends JSONAPISerializer {
  primaryKey = '_id';
  normalizeResponse(_store, primaryModelClass, payload) {
    payload.data = payload.results;
    payload.meta = {
      count: payload.count,
      next: payload.next,
      previous: payload.previous
    };
    payload.links = {
      next: payload.next
    };
    payload.type = primaryModelClass.modelName;

    return super.normalizeResponse(...arguments);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }

  _normalizeResourceHelper(resourceHash) {
    const item = {
      id: resourceHash.url
        ?.split('/')
        .filter((el) => el.length)
        .pop(),
      type: this.modelName,
      attributes: {
        ...resourceHash
      }
    };
    return super._normalizeResourceHelper(item);
  }
}
