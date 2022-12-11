import React from 'react';

import {OnStartService} from './onStart';
import {NavigationService} from './navigation';
import {TranslateService} from './translate';
import {ApiService} from './api';
import Toast  from 'react-native-toast-message';
import {ConnectionStatusBar} from 'react-native-ui-lib';

export class Services {
  static async init(): PVoid {
    for (const key in services) {
      if (Object.prototype.hasOwnProperty.call(services, key)) {
        const s = (services as any)[key] as IService;

        if (s.init) {
          await s.init();
        }
      }
    }
  }

  // services list
  t = new TranslateService();
  api = new ApiService();
  nav = new NavigationService();
  onStart = new OnStartService();
}
export const services = new Services();

// Providers and hooks
const ServicesContext = React.createContext<Services>(services);
export const ServicesProvider = ({children}: any) => (
  <ServicesContext.Provider value={services}>
<ConnectionStatusBar />
    {children}
    <Toast/>

  </ServicesContext.Provider>
);
export const useServices = (): Services => React.useContext(ServicesContext);
