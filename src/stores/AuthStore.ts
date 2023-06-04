import { action, flow, makeObservable } from 'mobx';

import { loginByEmail } from '../apis/AuthApi';

export type Modal = 'signUpModal' | 'signInModal' | '';

export default class AuthStore {
  constructor() {
    makeObservable(this);
  }

  @action.bound loginByEmail = flow(function* (
    this: AuthStore,
    payload: { email: string; password: string },
  ) {
    const { email, password } = payload;
    try {
      return yield loginByEmail(email, password);
    } catch (error) {
      throw error;
    }
  });
}
