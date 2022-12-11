
import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';
import { showToast } from '../utils/help';

export class TroublerShootStore implements IStore {
  someProperty = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'TroublerShootStore',
      properties: [],
    });
  }


  /***
   * handles servers exceptions
   * */
  handleServerExceptions(message?: string): void {
    if (message) {
      showToast('error' , 'Alert',  message, undefined ,4000)
    } else {
      showToast('error' , 'We Are Sorry',  'Something Went Wrong, Please contact Support',undefined, 4000)
    }
  }



  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
