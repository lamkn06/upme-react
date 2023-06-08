import { action, flow, makeObservable, observable } from 'mobx';

import { getPublicProfile } from '../apis/PublicProfileApi';
import type { PublicProfile } from '../models/PublicProfile';

export default class PublicProfileStore {
  @observable loading = false;
  @observable publicProfile: PublicProfile = null;

  constructor() {
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (
    this: PublicProfileStore,
    page: string,
  ) {
    this.loading = true;
    try {
      const response = yield getPublicProfile(page);
      this.publicProfile = response;
    } catch (error) {
      throw error;
    } finally {
      this.loading = false;
    }
  });
}
