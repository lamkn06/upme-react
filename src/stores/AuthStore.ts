import { makeObservable } from 'mobx';

export type Modal = 'signUpModal' | 'signInModal' | '';

export default class AuthStore {
  constructor() {
    makeObservable(this);
  }
}
