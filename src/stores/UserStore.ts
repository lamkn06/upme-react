import { action, flow, makeObservable, observable } from 'mobx';

import { getUser } from '../apis/UserApi';
import type { UserSetting } from '../models/User';

export default class UserStore {
  @observable loading = false;
  @observable isAuthenticated = false;

  @observable setting: UserSetting = null;
  @observable token = localStorage.getItem('token');

  @observable selectingImage = null;
  @observable cropAvatar: Blob = null;

  constructor() {
    this.fetch();
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (this: UserStore) {
    if (!this.token) return;
    this.loading = true;
    try {
      const response = yield getUser();
      const { setting } = response;
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
    this.setting = null;
    localStorage.removeItem('token');
  }

  @action.bound setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  @action.bound setSelectingImageImage(file: File) {
    this.selectingImage = file;
  }

  @action.bound setCropAvatar(blob: Blob) {
    this.cropAvatar = blob;
  }
}
