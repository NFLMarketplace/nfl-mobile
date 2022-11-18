import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';
import {IStore, InquiryData, PVoid} from '../utils/types';
import {apiSauce} from '../services/api/apiManager';
import {services} from '../services';
import {Com_EP} from '../services/api/apiConstants';
import {Alert} from 'react-native';
import {observable} from 'mobx';
import {string} from 'yup/lib/locale';
export class CompanyStore implements IStore {
  @observable is_com_ops_loading = false;
  @observable is_success_modal_shown = false;
  someProperty = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'Company Details',
      properties: [''],
    });
  }
  attemptToPostCompanyData(): void {
    this.handleComOpsLoading(true);
    apiSauce(false)
      .post(Com_EP, {
        user_id: string,
        first_name: string,
        middle_name: string,
        last_name: string,
        business_name: string,
        technical_details: string,
        types_of_establishment: string,
        choose_emirates: string,
        emirates_freezone: string,
      })
      .then(apiResponse => {
        const {status} = apiResponse;
        if (status === 200) {
          console.log('Data send');
          this.handleSuccessModal(true);
          //nav.goToMain();
        } else {
          this.handleServerExceptions(apiResponse.data.message);
        }
        this.handleComOpsLoading(false);
      })
      .catch(_apiError => {
        this.handleServerExceptions(_apiError.message);
      });
  }
  // Unified set methods
  set<T extends StoreKeysOf<SampleStore>>(what: T, value: SampleStore[T]) {
    (this as SampleStore)[what] = value;
  }
  setMany<T extends StoreKeysOf<SampleStore>>(obj: Record<T, SampleStore[T]>) {
    for (const [k, v] of Object.entries(obj)) {
      this.set(k as T, v as SampleStore[T]);
    }
  }
  handleServerExceptions(message?: string): void {
    if (message) {
      Alert.alert('We Are Sorry', message);
    } else {
      Alert.alert(
        'We Are Sorry',
        'Something Went Wrong, Please contact Support',
      );
    }
  }
  handleSuccessModal(value: boolean): void {
    this.is_success_modal_shown = value;
  }

  private handleComOpsLoading(loading: boolean): void {
    this.is_com_ops_loading = loading;
  }

  // Hydration
  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
