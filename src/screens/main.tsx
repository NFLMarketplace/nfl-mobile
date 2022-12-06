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
import {screens} from '../screens';

type GridDataType = {
  id: number;
  title: string;
  bgImgUrl: string;
  onPress: string;
};

export const Main: ScreenComponent = observer(({componentId}) => {
  const gridData: GridDataType[] = [
    {
      id: 0,
      title: 'Make Enquiry',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Make-Inquiry.jpg',
      onPress: 'InquiryForm',
    },
    {
      id: 1,
      title: 'PRO Services',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/PRO-Services.jpg',
      onPress: 'ProServices',
    },
    {
      id: 2,
      title: 'B2B Services',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/B2B-Services.jpg',
      onPress: 'B2BServices',
    },
    {
      id: 3,
      title: 'B2C Services',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/B2C-Services.jpg',
      onPress: 'B2CServices',
    },
    {
      id: 4,
      title: 'Company Formation',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Company-Formation.jpg',
      onPress: 'CompanyFormation',
    },

    {
      id: 5,
      title: 'WPS Services',
      bgImgUrl:
        'https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/WPS-Services.jpg',
      onPress: 'WPSServices',
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
      <MainHeader title={'NFL Marketplace'} rightIcon={'md-notifications'} />

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
