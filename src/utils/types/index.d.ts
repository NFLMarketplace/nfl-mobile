// `stores` layer
interface IStore {
  hydrate?: () => PVoid;
}

type StoreDefaultKeys = 'set' | 'setMany' | 'hydrate';
type StoreKeysOf<S> = keyof Omit<S, StoreDefaultKeys>;

// `services` layer
interface IService {
  init: () => PVoid;
}

// System
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;
type PureFuncAsync = () => PVoid;
type PureFuncArg<T> = (value?: T) => void;

// Design system
type StatusBarStyle = 'light' | 'dark' | undefined;
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
  greyDark: string;
};

export interface LoginResponse {
  token: string;
  user_data: UserData;
  user_phone_number: string;
}

export interface UserData {
  ID: string;
  user_login: string;
  user_pass: string;
  user_nicename: string;
  user_email: string;
  user_url: string;
  user_registered: string;
  user_activation_key: string;
  user_status: string;
  display_name: string;
}
export interface InquiryData {
  user_id: string;
  volunteer_inquiry_form: string;
  volunteer_date: string;
  volunteer_quotations: string;
  volunteer_item: string;
  volunteer_quantity: string;
  volunteer_packaging: string;
  volunteer_country_of_origin: string;
  volunteer_delivery_days: string;
  volunteer_delivery_locations: string;
  volunteer_delivery_area: string;
  volunteer_delivery_line: string;
  volunteer_delivery_line2: string;
  volunteer_notes: string;
}
