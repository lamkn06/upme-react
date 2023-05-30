import axios from 'axios';
import { action, computed, flow, makeObservable, observable } from 'mobx';

const LangsKey: {
  [key: string]: string;
} = {
  VN: 'vi',
  EN: 'en',
};

export default class MasterStore {
  @observable languages = [
    { value: 'vi', label: 'VN' },
    { value: 'en', label: 'EN' },
  ];
  @observable clientLanguage = 'en';

  constructor() {
    this.fetch();
    makeObservable(this);
  }

  @action.bound fetch = flow(function* (this: MasterStore) {
    try {
      const { data } = yield axios.get('https://geolocation-db.com/json/');
      const lang = LangsKey[data.country_code as string];
      if (!lang) {
        this.clientLanguage = 'en';
        return;
      }

      this.clientLanguage = lang;
    } catch (error) {
      return error;
    }
  });

  @action.bound setClientCountry(language: string) {
    this.clientLanguage = language;
  }

  @computed get currentLanguage() {
    return this.languages.find((lang) => lang.value === this.clientLanguage);
  }
}
