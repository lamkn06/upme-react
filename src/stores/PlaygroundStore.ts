import { action, flow, observable } from 'mobx';

import { createPlaygroundApi } from '../apis/PlaygroundApi';
import { PlaygroundType } from '../models/playground.model';

export default class PlaygroundStore {
  @observable loading = false;
  @observable error = null;
  @observable response = null;

  @action.bound create = flow(function* (
    this: PlaygroundStore,
    payload: PlaygroundType,
  ) {
    try {
      this.loading = true;
      this.response = yield createPlaygroundApi(payload);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } catch (error: any) {
      console.log('error');
      this.error = error;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } finally {
      console.log('finally');
      this.loading = false;
    }
  });
}
