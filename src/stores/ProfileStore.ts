import { action, flow, makeObservable, observable } from 'mobx';

import { getProfile, updateProfile } from '../apis/ProfileApi';
import type { UserProfile } from '../models/User';

export default class ProfileStore {
  @observable loading = false;
  @observable token = localStorage.getItem('token');

  @observable profile: UserProfile = {
    displayName: '',
    email: '',
    fullName: '',
    id: '',
    profilePicture: '',
  };

  @observable educations = [];

  constructor() {
    this.fetch();
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (this: ProfileStore) {
    if (!this.token) return;
    this.loading = true;
    try {
      const profile = yield getProfile();
      this.profile = profile;
    } catch (error) {
      throw error;
    } finally {
      this.loading = false;
    }
  });

  @action.bound update = flow(function* (this: ProfileStore) {
    try {
      yield updateProfile(this.profile.id, {
        ...this.profile,
        educations: this.educations,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

  @action.bound setProfile(profile: UserProfile) {
    this.profile = profile;
  }

  @action.bound createEducation(education: any) {
    this.educations.push(education);
  }
}
