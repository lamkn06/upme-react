import { action, flow, makeObservable, observable } from 'mobx';

import { getUser } from '../apis/UserApi';
import type { UserProfile, UserSetting } from '../models/User';

export default class UserStore {
  @observable loading = false;
  @observable isAuthenticated = false;

  @observable profile: UserProfile = null;
  @observable setting: UserSetting = null;
  @observable token = localStorage.getItem('token');

  constructor() {
    this.fetch();
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (this: UserStore) {
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
}
