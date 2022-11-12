import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';

import {Main} from './main';
import {Settings} from './settings';
import {InquiryForm} from './inquiryForm';
import {Login} from './crud/login';
import {Register} from './crud/register';
import {Profile} from './profile'

import {withBottomTab, withRightButtons} from '../services/navigation/options';
import {withAppearance} from '../utils/hooks';
import {withSS} from '../utils/providers';

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
    Main: {
      component: Main,
      options: {
        topBar: {
          // title is set in services/navigation/index.ts::configureTitleTranslations
          ...withRightButtons('inc', 'dec'),
        },
        ...withBottomTab('Main', 'home'),
      },
    },
    Settings: {
      component: Settings,
      options: {
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Settings', 'settings'),
      },
    },

    Profile: {
      component: Profile,
      options: {
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Profile', 'person'),
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
  },
  [withGestureHandler, withSS, withAppearance],
);
