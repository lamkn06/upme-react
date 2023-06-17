import { createContext, useContext } from 'react';

import MasterStore from './stores/MasterStore';
import ModalStore from './stores/ModalStore';
import ProfileStore from './stores/ProfileStore';
import SessionStore from './stores/SessionStore';
import UserStore from './stores/UserStore';

export class RootStore {
  modalStore: ModalStore;
  masterStore: MasterStore;
  userStore: UserStore;
  profileStore: ProfileStore;
  sessionStore: SessionStore;

  constructor() {
    this.modalStore = new ModalStore();
    this.sessionStore = new SessionStore();
    this.masterStore = new MasterStore();
    this.userStore = new UserStore();
    this.profileStore = new ProfileStore(this.sessionStore);
  }
}
const rootStoreContext = createContext<RootStore | null>(null);

export const Provider = ({ children }: any) => {
  const rootStore = (() => {
    if (typeof window !== 'undefined') {
      if (!window.__rootStore) {
        window.__rootStore = new RootStore();
      }

      return window.__rootStore;
    } else {
      // server
      return new RootStore();
    }
  })();

  return (
    <rootStoreContext.Provider value={rootStore}>
      {children}
    </rootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(rootStoreContext);

  if (!store) {
    throw new Error('useRootStore must be use in Provider');
  }
  return store;
};
