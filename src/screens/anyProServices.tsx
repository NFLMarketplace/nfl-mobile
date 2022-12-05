import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {MainHeader} from '../components';
import {ScreenComponent} from 'rnn-screens';
import {services} from '../services';
import {
  Colors,
  TextField,
  View,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native-ui-lib';
import {Ionicons} from '@expo/vector-icons';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

export type Props = {
  componentId: string;
};
export const ProServices: ScreenComponent<Props> = ({componentId}) => {
  return (
    <View flex bg-bgColor>
      <MainHeader
        title={'[Any PRO Service]'}
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center>
          <TextField
            name="notes"
            width={elementWidth}
            height={120}
            hideUnderline={true}
            blurOnSubmit={false}
            style={styles.textField}
            placeholder="Notes (Describe the nature of service)"
            text12Medium
            textColor
            placeholderTextColor={Colors.textColor}
            // onChangeText={setCompanyName}
            migrate
            onSubmitEditing={() => {
              //phoneNumberRef?.current.focus();
            }}
            returnKeyType={'next'}
          />
          <View
            marginV-20
            center
            width={elementWidth}
            height={170}
            backgroundColor="#F2F2F2">
            <View center>
              <TouchableOpacity
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 23,
                  backgroundColor: '#F2C94C',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="add" size={30} color="black" />
              </TouchableOpacity>
              <Text padding-5> Upload Relevent Documents</Text>
            </View>
          </View>
          <Button
            label={'Submit'}
            color="black"
            borderRadius={8}
            style={styles.button}
            text18Bold
            backgroundColor={Colors.primary}
          />
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
    alignItems: 'flex-start',
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
