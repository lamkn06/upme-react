import { action, flow, makeObservable, observable } from 'mobx';

import { getProfile, updateProfile } from '../apis/ProfileApi';
import type { Education } from '../models/Education';
import type { UserProfile } from '../models/User';
import SessionStore from './SessionStore';

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

  @observable educations: Education[] = [];

  constructor(private sessionStore: SessionStore) {
    this.fetch();
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (this: ProfileStore) {
    if (!this.token) return;
    this.loading = true;
    try {
      const profile = yield getProfile();
      this.profile = profile;

      if (profile.educations.length > 0) {
        this.sessionStore.addSection('education');
        this.educations = profile.educations;
      }
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

  @action.bound createEducation(education: Education) {
    this.educations.push(education);

    if (this.educations.length === 1) {
      this.sessionStore.addSection('education');
    }
  }

  @action.bound deleteEducation(index: number) {
    this.educations.splice(index, 1);

    if (this.educations.length === 0) {
      this.sessionStore.removeSection('education');
    }
  }

  @action.bound setProfile(profile: UserProfile) {
    this.profile = profile;
  }
}
