import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {stores} from '../stores';
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
export const Profile: ScreenComponent<Props> = ({componentId}) => {
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center></View>
        <View flex center marginT-60>
          <Text text18Bold color="white">
            Profile
          </Text>
          <View
            flex
            paddingT-10
            row
            width={elementWidth}
            style={{justifyContent: 'space-between'}}>
            <Text text18Medium>Full Name</Text>
            <Text text18Medium>{stores.user.user_data?.display_name}</Text>
          </View>
          <View
            flex
            paddingT-10
            row
            width={elementWidth}
            style={{justifyContent: 'space-between'}}>
            <Text text18Medium>Email</Text>
            <Text text18Medium>{stores.user.user_data?.user_email}</Text>
          </View>
          <View
            flex
            paddingT-10
            row
            width={elementWidth}
            style={{justifyContent: 'space-between'}}>
            <Text text18Medium>Password</Text>
            <Text text18Medium>{stores.user.user_data?.user_pass}</Text>
          </View>
          <View
            flex
            paddingT-10
            row
            width={elementWidth}
            style={{justifyContent: 'space-between'}}>
            <Text text18Medium>Phone Number</Text>
            <Text text18Medium>{stores.user.user_phone_number}</Text>
          </View>
          <TouchableOpacity marginT-20>
            <Text text18Medium color={Colors.yellow30}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
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
