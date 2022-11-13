import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';

import {ScreenComponent} from 'rnn-screens';
import {Colors, Text, View, TouchableOpacity} from 'react-native-ui-lib';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

export type Props = {
  componentId: string;
};
export const Wallet: ScreenComponent<Props> = ({componentId}) => {
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center></View>
      </ScrollView>
    </View>
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
