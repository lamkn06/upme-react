import { action, computed, makeObservable, observable } from 'mobx';

export type Modal =
  | 'modalSignUp'
  | 'modalSignIn'
  | 'modalSignInSuccess'
  | 'modalEditProfile'
  | 'modalCropAvatar'
  | 'modalAddSection'
  | 'modalEducation'
  | '';

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
    this.modals = [...this.modals, modal];
  }

  @action.bound closeModal(modal: Modal): void {
    this.modals = this.modals.filter((m) => m !== modal);
  }

  @computed get isModalSignInOpen(): boolean {
    return this.modals.includes('modalSignIn');
  }

  @computed get isModalSignUpOpen(): boolean {
    return this.modals.includes('modalSignUp');
  }

  @computed get isModalSignInSuccessOpen(): boolean {
    return this.modals.includes('modalSignInSuccess');
  }

  @computed get isModalEditProfileOpen(): boolean {
    return this.modals.includes('modalEditProfile');
  }

  @computed get isModalCropAvatarOpen(): boolean {
    return this.modals.includes('modalCropAvatar');
  }

  @computed get isModalAddSectionOpen(): boolean {
    return this.modals.includes('modalAddSection');
  }

  @computed get isModalEducationOpen(): boolean {
    return this.modals.includes('modalEducation');
  }
}
