import React from 'react';
import {ScrollView, Dimensions, StyleSheet, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {ScreenComponent} from 'rnn-screens';

import {TabController, Colors, Text, View} from 'react-native-ui-lib';
import {MainHeader} from '../components';
import {services} from '../services';
import {Tab1} from './inboxTabs/inquiryTab';
import {Tab2} from './inboxTabs/quotationsTab';
import {Tab3} from './inboxTabs/messagesTab';
import {screens} from '.';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

export type Props = {
  componentId: string;
};
export const Inbox: ScreenComponent<Props> = ({componentId}) => {
  return (
    <TabController
      bg-bgColor
      items={[{label: 'Inquiry'}, {label: 'Messages'}, {label: 'Quotations'}]}>
      <TabController.TabBar enableShadows selectedLabelColor={'#F2C94C'} />
      <View flex>
        <TabController.TabPage index={0}>
          <Tab1 />
        </TabController.TabPage>
        <TabController.TabPage index={1} lazy>
          <Tab2 />
        </TabController.TabPage>
        <TabController.TabPage index={2} lazy>
          <Tab3 />
        </TabController.TabPage>
      </View>
    </TabController>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  textField: {
    textAlign: 'left',
    padding: 10,
    marginTop: 7,
    height: elementHeight,
    borderWidth: 1,
    borderRadius: 5,
    width: elementWidth,
  },
  logoImage: {
    height: logoHeight,
    width: screenWidth,
  },
  button: {
    height: 48,
    marginTop: 10,
    width: elementWidth,
  },
  checkboxSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.accent,
  },
  checkboxUnSelected: {
    borderColor: Colors.accent,
  },
});
