import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PeopleListComponent extends Component {
  @service store;
  @tracked args = this.args;

  model() {
    const args = this.args;
  }
}
