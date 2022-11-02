import {LogBox} from 'react-native';
import {Root, Screen, BottomTabs} from 'rnn-screens';

import {screens} from './src/screens';
import {Services} from './src/services';
import {Stores} from './src/stores';
import {DesignSystem} from './src/utils/designSystem';
import {readAllAssets} from './src/utils/constants';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs(['Require', 'RCTBridge']);

export const beforeStart = async (): PVoid => {
  // 1. hydrate stores
  await Stores.hydrate();

  // 2. configure design system
  await DesignSystem.configure();

  //3. load assets
  await readAllAssets();
  // 4. init services
  await Services.init();

  // 5. hide splash screen
  SplashScreen.hide();
};

export const App = () => Root(Screen(screens.get('Login')));
