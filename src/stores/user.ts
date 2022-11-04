import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';
import {Alert} from 'react-native';
import {observable} from 'mobx';

import {apiSauce} from '../services/api/apiManager';
import {LOGIN_EP, REGISTER_EP} from '../services/api/apiConstants';
import {IStore, UserData, PVoid} from '../utils/types';

export class UserStore implements IStore {
  is_logged_in = false;
  user_jwt_token: string | null = null;
  @observable is_user_ops_loading = false;
  @observable user_data: UserData | null = null;
  user_phone_number = '';

  attemptToLogin(username: string, password: string): void {
    this.handleUserOpsLoading(true);
    apiSauce(false)
      .post(LOGIN_EP, {username, password})
      .then(apiResponse => {
        const {status} = apiResponse;
        if (status === 200) {
          this.handleProfileDetails(apiResponse.data.user_data);
          this.handleAuthToken(apiResponse.data.token);
          this.handleUserPhoneNumber(apiResponse.data.user_phone_number);
          this.handleIsLoggedIn(true);
          //const navService = new NavService();
          //navService.goToMain();
        } else {
          this.handleServerExceptions(apiResponse.data.message);
        }
        this.handleUserOpsLoading(false);
      })
      .catch(_apiError => {
        this.handleServerExceptions(_apiError.message);
      });
  }

  private handleProfileDetails(user: UserData | null): void {
    this.user_data = user;
  }

  private handleUserPhoneNumber(phone: string): void {
    this.user_phone_number = phone;
  }

  attemptToLogout(): void {
    this.handleIsLoggedIn(false);
    this.handleProfileDetails(null);
  }

  attemptToRegister(
    companyName: string,
    phone: string,
    email: string,
    password: string,
  ): void {
    this.handleUserOpsLoading(true);
    apiSauce(false)
      .post(REGISTER_EP, {
        company_name: companyName,
        phone_number: phone,
        email,
        password,
      })
      .then(apiResponse => {
        const {status} = apiResponse;
        if (status === 200) {
          this.handleIsLoggedIn(true);
        } else {
          this.handleServerExceptions(apiResponse.data.message);
        }
        this.handleUserOpsLoading(false);
      })
      .catch(_apiError => {
        this.handleServerExceptions(_apiError.message);
      });
  }

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'user_details',
      properties: ['user_jwt_token', 'is_logged_in', 'user_phone_number'],
    });
  }
  /***
   * handles servers exceptions
   * */
  handleServerExceptions(message?: string): void {
    if (message) {
      Alert.alert('We Are Sorry', message);
    } else {
      Alert.alert(
        'We Are Sorry',
        'Something Went Wrong, Please contact Support',
      );
    }
    this.handleUserOpsLoading(false);
  }

  private handleAuthToken(token: string): void {
    this.user_jwt_token = token;
  }

  private handleIsLoggedIn(loggedIn: boolean): void {
    this.is_logged_in = loggedIn;
  }

  private handleUserOpsLoading(loading: boolean): void {
    this.is_user_ops_loading = loading;
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
