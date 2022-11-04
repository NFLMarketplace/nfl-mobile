import {ApisauceInstance, create} from 'apisauce';
import {BASE_URL} from './apiConstants';
import {stores} from '../../stores';

export function apiSauce(): ApisauceInstance {
  let occ: ApisauceInstance;
  const {user_jwt_token} = stores?.user;

  if (user_jwt_token !== null) {
    occ = create({
      baseURL: BASE_URL,
      headers: {Authorization: `Bearer ${user_jwt_token}`},
    });
  } else {
    occ = create({
      baseURL: BASE_URL,
    });
  }
  return occ;
}
