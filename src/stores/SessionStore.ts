import { action, makeObservable, observable } from 'mobx';

export default class SessionStore {
  @observable sections: string[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound addSection(section) {
    this.sections.push(section);
  }

  @action.bound removeSection(section) {
    this.sections = this.sections.filter((s) => s !== section);
  }

  @action.bound setSection(sections) {
    this.sections = sections;
  }
}
