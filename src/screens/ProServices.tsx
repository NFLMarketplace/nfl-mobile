import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {
  Text,
  View,
  GridList,
  Spacings,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import {observer} from 'mobx-react';
import FastImage from 'react-native-fast-image';

import {MainHeader} from '../components';
import {services} from '../services';
import {screens} from '.';

type GridDataType = {
  id: number;
  title: string;
  bgImgUrl: string;
  onPress: string;
};

export const ProServices: ScreenComponent = observer(({componentId}) => {
  const gridData: GridDataType[] = [
    {
      id: 0,
      title: 'Trade License Renewal',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Trade-License-Renewal.jpg',
      onPress: '',
    },
    {
      id: 1,
      title: 'Apply for New Quota',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-New-Quota.jpg',
      onPress: '',
    },
    {
      id: 2,
      title: 'Ejari New',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Ejari-New.jpg',
      onPress: '',
    },
    {
      id: 3,
      title: 'Apply for New Labour Contract',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-New-Labour-Contract.jpg',
      onPress: '',
    },
    {
      id: 4,
      title: 'Apply for New VISA',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-New-VISA.jpg',
      onPress: '',
    },

    {
      id: 5,
      title: 'Apply for Medical Certificate',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-Medical-Certificate.jpg',
      onPress: '',
    },
    {
      id: 6,
      title: 'Apply for New Emirates ID',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-New-Emirates-ID.jpg',
      onPress: '',
    },
    {
      id: 7,
      title: 'Apply for Visa Cancellation',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-Visa-Cancellation.jpg',
      onPress: '',
    },
    {
      id: 8,
      title: 'Apply for Name Change in Labour Qouta',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-Name-Change-in-Labour-Qouta.jpg',
      onPress: '',
    },
    {
      id: 9,
      title: 'Apply for EID Cancellation',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-EID-Cancellation.jpg',
      onPress: '',
    },
    {
      id: 10,
      title: 'Apply for Family VISA',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-Family-VISA.jpg',
      onPress: '',
    },
    {
      id: 11,
      title: 'Court Agreement(Letter/Notary)',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Court-Agreement.jpg',
      onPress: '',
    },
    {
      id: 11,
      title: 'Legal Translation',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Legal-Translation.jpg',
      onPress: '',
    },
    {
      id: 12,
      title: 'Apply for Labour/Immigration Card Renewal',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Apply-for-Labour-Immigration-Card-Renewal.jpg',
      onPress: '',
    },
    {
      id: 13,
      title: 'MOA New Amendmends',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/MOA-New-Amendmendsl.jpg',
      onPress: '',
    },
  ];

  const _renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        screens.show(item.onPress);
      }}>
      <FastImage
        resizeMode="stretch"
        style={{height: 100}}
        source={{uri: item.bgImgUrl}}>
        <View></View>
      </FastImage>
    </TouchableOpacity>
  );

  return (
    <View flex bg-bgColor>
      <MainHeader
        title={'PRO Services'}
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />

      <GridList
        data={gridData}
        renderItem={_renderItem}
        numColumns={2}
        maxItemWidth={200}
        itemSpacing={Spacings.s3}
        listPadding={Spacings.s5}
      />
    </View>
  );
});
