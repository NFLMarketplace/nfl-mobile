import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';
import {IStore, InquiryData, PVoid} from '../utils/types';
import {apiSauce} from '../services/api/apiManager';
import {Inq_EP} from '../services/api/apiConstants';
import {Alert} from 'react-native';
import {observable} from 'mobx';

export class QueryStore implements IStore {
  @observable inquiry_data: InquiryData | null = null;
  @observable is_query_ops_loading = false;
  @observable is_success_modal_shown = false;
  someProperty = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'Query Details',
      properties: [''],
    });
  }
  attemptToPostInquiryData(
    user_id: string,
    volunteer_inquiry_form: string,
    volunteer_date: string,
    volunteer_quotations: string,
    volunteer_item: string,
    volunteer_quantity: string,
    volunteer_packaging: string,
    volunteer_country_of_origin: string,
    volunteer_delivery_days: string,
    volunteer_delivery_locations: string,
    volunteer_delivery_area: string,
    volunteer_delivery_line: string,
    volunteer_delivery_line2: string,
    volunteer_notes: string,
  ): void {
    this.handleQueryOpsLoading(true);
    apiSauce(false)
      .post(Inq_EP, {
        user_id,
        volunteer_inquiry_form,
        volunteer_date,
        volunteer_quotations,
        volunteer_item,
        volunteer_quantity,
        volunteer_packaging,
        volunteer_country_of_origin,
        volunteer_delivery_days,
        volunteer_delivery_locations,
        volunteer_delivery_area,
        volunteer_delivery_line2,
        volunteer_delivery_line,
        volunteer_notes,
      })
      .then(apiResponse => {
        const {status} = apiResponse;
        if (status === 200) {
          console.log('Data send');
          //nav.goToMain();
          this.handleSuccessModal(true);
          console.log(this.is_success_modal_shown);
        } else {
          this.handleServerExceptions(apiResponse.data.message);
        }
        this.handleQueryOpsLoading(false);
      })
      .catch(_apiError => {
        this.handleServerExceptions(_apiError.message);
      });
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
    this.handleQueryOpsLoading(false);
  }

  /**
   * this will be called by component of dialogue to close itself
   * */
  handleSuccessModal(value: boolean): void {
    this.is_success_modal_shown = value;
  }

  private handleQueryOpsLoading(loading: boolean): void {
    this.is_query_ops_loading = loading;
  }

  // Hydration
  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
