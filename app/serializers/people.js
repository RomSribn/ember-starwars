import ApplicationSerializer from './application';
import { underscore } from '@ember/string';

export default class PeopleSerializer extends ApplicationSerializer {
  modelName = 'people';
  keyForAttribute(attr) {
    return underscore(attr);
  }
}
