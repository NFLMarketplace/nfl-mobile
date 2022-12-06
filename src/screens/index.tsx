import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';

import {Main} from './main';
import {QuotationForm} from './quotationForm';
import {InquiryForm} from './inquiryForm';
import {Login} from './crud/login';
import {Register} from './crud/register';
import {Profile} from './profile';
import {Inbox} from './inbox';
import {Wallet} from './wallet';
import {CompanyFormation} from './companyFormation';
import {CompleteProfile} from './completeProfile';
import {withBottomTab, withRightButtons} from '../services/navigation/options';
import {withAppearance} from '../utils/hooks';
import {withSS} from '../utils/providers';
import {OnboardingScreen} from './onboardingScreen';
import {AddProServices} from './anyProServices';
import {B2BServices} from './B2B Services';
import {B2CServices} from './B2C Services';
import {WPSServices} from './WPS Services';
import {ProServices} from './ProServices';

export const screens = generateRNNScreens(
  {
    Login: {
      component: Login,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    Register: {
      component: Register,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    QuotationForm: {
      component: QuotationForm,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    Main: {
      component: Main,
      options: {
        topBar: {
          // title is set in services/navigation/index.ts::configureTitleTranslations
          ...withRightButtons('inc', 'dec'),
        },
        ...withBottomTab('Main', 'view-dashboard'),
      },
    },

    Profile: {
      component: Profile,
      options: {
        topBar: {
          visible: false,
        },
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Profile', 'person'),
      },
    },

    Inbox: {
      component: Inbox,
      options: {
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Inbox', 'chatbubble-ellipses'),
      },
    },

    Wallet: {
      component: Wallet,
      options: {
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Wallet', 'wallet'),
      },
    },

    InquiryForm: {
      component: InquiryForm,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    AddProServices: {
      component: AddProServices,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    B2BServices: {
      component: B2BServices,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    B2CServices: {
      component: B2CServices,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    WPSServices: {
      component: WPSServices,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    ProServices: {
      component: ProServices,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    CompanyFormation: {
      component: CompanyFormation,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    CompleteProfile: {
      component: CompleteProfile,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    OnboardingScreen: {
      component: OnboardingScreen,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  },
  [withGestureHandler, withSS, withAppearance],
);
