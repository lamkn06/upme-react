import { action, computed, makeObservable, observable } from 'mobx';

export type Modal = 'signUpModal' | 'signInModal' | '';

export default class ModalStore {
  @observable modals: Modal[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound openModal(modal: Modal): void {
    if (modal === '') {
      this.modals = [];
      return;
    }

    // need previous state
    this.modals = [modal];
  }

  @action.bound closeModal(modal: Modal): void {
    this.modals = this.modals.filter((m) => m !== modal);
  }

  @computed get isSignInModalOpen(): boolean {
    return this.modals.includes('signInModal');
  }

  @computed get isSignUpModalOpen(): boolean {
    return this.modals.includes('signUpModal');
  }
}
