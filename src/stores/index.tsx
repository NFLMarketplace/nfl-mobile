import React from 'react';

import './_hydration';
import {UIStore} from './ui';
import {CounterStore} from './counter';
import {UserStore} from './user';
import {QueryStore} from './query';
import {CompanyStore} from './company';
import {ProfileStore} from './profile';
import { TroublerShootStore } from './troubleshooter';

export class Stores {
  static async hydrate(): PVoid {
    for (const key in stores) {
      if (Object.prototype.hasOwnProperty.call(stores, key)) {
        const s = (stores as any)[key] as IStore;

        if (s.hydrate) {
          await s.hydrate();
        }
      }
    }
  }

  // stores list
  ui = new UIStore();
  user = new UserStore();
  query = new QueryStore();
  counter = new CounterStore();
  company = new CompanyStore();
  profile = new ProfileStore();
  troubleshooter = new TroublerShootStore();
}
export const stores = new Stores();

// Providers and hooks
const StoresContext = React.createContext<Stores>(stores);
export const StoresProvider = ({children}: any) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);
export const useStores = (): Stores => React.useContext(StoresContext);
