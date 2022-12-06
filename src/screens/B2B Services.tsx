import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {ScreenComponent} from 'rnn-screens';
import {Colors, Text, View, Image} from 'react-native-ui-lib';
import iconImag from '../../assets/images/icon.png';
import {MainHeader} from '../components';
import {services} from '../services';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

export type Props = {
  componentId: string;
};
export const B2BServices: ScreenComponent<Props> = ({componentId}) => {
  return (
    <View flex bg-bgColor>
      <MainHeader
        title="B2B Services"
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />
      <View flex center>
        <Image source={iconImag}></Image>
        <Text marginV-10 text18Bold>
          Coming Very Soon
        </Text>
        <Text text12Medium>Stay tuned for the update</Text>
      </View>
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
