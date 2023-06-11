import { action, flow, makeObservable } from 'mobx';

import { loginByEmail, loginByGoogle, registerByEmail } from '../apis/AuthApi';

export type Modal = 'modalSignUp' | 'modalSignIn' | '';

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

  @action.bound loginByGoogle = flow(function* (
    this: AuthStore,
    payload: {
      email: string;
      familyName: string;
      givenName: string;
      imageUrl: string;
      name: string;
    },
  ) {
    try {
      return yield loginByGoogle({
        email: payload.email,
        fullName: payload.familyName + payload.givenName,
        displayName: payload.name,
        profilePicture: payload.imageUrl,
      });
    } catch (error) {
      throw error;
    }
  });

  @action.bound registerByEmail = flow(function* (
    this: AuthStore,
    payload: { email: string; password: string },
  ) {
    const { email, password } = payload;
    try {
      return yield registerByEmail(email, password);
    } catch (error) {
      throw error;
    }
  });
}
