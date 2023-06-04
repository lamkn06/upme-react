import { action, flow, makeObservable, observable } from 'mobx';

import { getUser } from '../apis/UserApi';
import type { UserProfile, UserSetting } from '../models/User';

export default class UserStore {
  @observable loading = false;
  @observable isAuthenticated = false;

  @observable profile: UserProfile = {
    displayName: '',
    email: '',
    fullName: '',
    id: '',
    profilePicture: '',
  };
  @observable setting: UserSetting = null;
  @observable token = localStorage.getItem('token');

  constructor() {
    this.fetch();
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (this: UserStore) {
    console.log('111', this.token);
    if (!this.token) return;
    this.loading = true;
    try {
      const response = yield getUser();
      const { profile, setting } = response;
      this.profile = profile;
      this.setting = setting;

      this.isAuthenticated = true;
    } catch (error) {
      throw error;
    } finally {
      this.loading = false;
    }
  });

  @action.bound signOut(this: UserStore) {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }

  @action.bound setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }
}
