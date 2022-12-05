import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {Text, View, Button, Colors, Image} from 'react-native-ui-lib';
import Onboarding from 'react-native-onboarding-swiper';
import {ScreenComponent} from 'rnn-screens';
import {stores, Stores} from '../stores';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
import {screens} from '.';
import {useServices} from '../services';
// import {useStores} from '../stores';
import {Section} from '../components/section';
import {BButton} from '../components/button';

import onBoardImage from '../../assets/images/onboarding.png';

export type Props = {
  type?: 'push' | 'show';
};
export const OnboardingScreen: ScreenComponent<Props> = ({
  componentId,
  type = 'push',
}) => {
  const {t} = useServices();
  // const {ui} = useStores();
  const next = ({...props}) => (
    <View center width={elementWidth}>
      <Text>Next</Text>
    </View>
  );
  // State

  // Methods

  // UI Methods

  return (
    <View flex bg-bgColor>
      <Onboarding
        skipLabel=""
        bottomBarHeight={20}
        imageContainerStyles={{height: '90%'}}
        titleStyles={{paddingBottom: 100, fontSize: 28, fontWeight: '700'}}
        pages={[
          {
            backgroundColor: '#000000',
            image: <Image source={onBoardImage} />,
            title: 'Lorem ipsum dolor set amit',
            subtitle: 'This is me',
          },
          {
            backgroundColor: '#000000',
            image: <Image source={onBoardImage} />,
            title: 'Lorem ipsum dolor set amit',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#000000',
            image: <Image source={onBoardImage} />,
            title: 'Lorem ipsum dolor set amit',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};
