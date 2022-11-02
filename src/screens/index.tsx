import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';

import {Main} from './main';
import {Settings} from './settings';
import {Login} from './crud/login';

import {withBottomTab, withRightButtons} from '../services/navigation/options';
import {Sample} from './_screen-sample';
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

    Sample: {
      component: Sample,
      options: {
        topBar: {
          title: {text: 'Sample'},
        },
      },
    },
  },
  [withGestureHandler, withSS, withAppearance],
);
