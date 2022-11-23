import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';
import {IStore, InquiryData, PVoid} from '../utils/types';
import {apiSauce} from '../services/api/apiManager';
import {Profile_EP} from '../services/api/apiConstants';
import {Alert} from 'react-native';
import {observable} from 'mobx';

export class ProfileStore implements IStore {
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
    nature_of_business: string,
    company_name: string,
    trade_license: string,
    vat_license: string,
    moa_certificate: string,
    tenancy_office_contract: string,
    partner_name: string,
    partner_passport_visa: string,
    partner_eid: string,
    partner_employee_list: string,
    partner_immigration_card: string,
    partner_labour_card: string,
    partner_ejari: string,
    partner_business_email: string,
    partner_website: string,
    partner_landline: string,
    partner_landline_2: string,
    partner_mobile: string,
    partner_mobile_2: string,
    partner_city: string,
    partner_country: string,
  ): void {
    this.handleQueryOpsLoading(true);
    apiSauce(false)
      .post(Profile_EP, {
        user_id,
        nature_of_business,
        company_name,
        trade_license,
        vat_license,
        moa_certificate,
        tenancy_office_contract,
        partner_name,
        partner_passport_visa,
        partner_eid,
        partner_employee_list,
        partner_immigration_card,
        partner_labour_card,
        partner_ejari,
        partner_business_email,
        partner_website,
        partner_landline,
        partner_landline_2,
        partner_mobile,
        partner_mobile_2,
        partner_city,
        partner_country,
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
