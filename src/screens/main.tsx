import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import * as Application from 'expo-application';
import {If} from '@kanzitelli/if-component';
import {observer} from 'mobx-react';

import {screens} from '.';
import {useServices} from '../services';
import {useStores} from '../stores';
import {Props as SampleProps} from './_screen-sample';
import {Row} from '../components/row';
import {MainHeader} from '../components';

export const Main: ScreenComponent = observer(({componentId}) => {
  const {counter, ui} = useStores();
  const {t, api} = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);

  return (
    <View flex bg-bgColor>
      <MainHeader title={'NFL Marketplace'} rightIcon={'md-notifications'} />
      <ScrollView contentInsetAdjustmentBehavior="always" />
    </View>
  );
});
