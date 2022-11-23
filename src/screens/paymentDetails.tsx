import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {View, Colors, Text, TextField, Button} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';

import {screens} from '.';
import {useServices} from '../services';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

// import {useStores} from '../stores';

export type Props = {
  type?: 'push' | 'show';
};
export const PaymentDetails: ScreenComponent<Props> = ({
  componentId,
  type = 'push',
}) => {
  const {t} = useServices();
  // const {ui} = useStores();

  // State

  // UI Methods

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center>
          <View
            width={elementWidth}
            marginB-s2
            marginT-10
            borderRadius={2}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
            <Text text16Medium>Bank Details</Text>
          </View>
          <View bg-greyDark marginT-10 borderRadius={10}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Bank Name"
              text14Medium
              textColor
              placeholderTextColor={Colors.textColor}
              // onChangeText={setCompanyName}
              migrate
              onSubmitEditing={() => {
                //phoneNumberRef?.current.focus();
              }}
              returnKeyType={'next'}
            />
          </View>
          <View bg-greyDark marginT-10 borderRadius={10}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Account Title"
              text14Medium
              textColor
              placeholderTextColor={Colors.textColor}
              // onChangeText={setCompanyName}
              migrate
              onSubmitEditing={() => {
                //phoneNumberRef?.current.focus();
              }}
              returnKeyType={'next'}
            />
          </View>
          <View bg-greyDark marginT-10 borderRadius={10}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Account Number"
              text14Medium
              textColor
              placeholderTextColor={Colors.textColor}
              // onChangeText={setCompanyName}
              migrate
              onSubmitEditing={() => {
                //phoneNumberRef?.current.focus();
              }}
              returnKeyType={'next'}
            />
          </View>
          <View bg-greyDark marginT-10 borderRadius={10}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="IBAN Number"
              text14Medium
              textColor
              placeholderTextColor={Colors.textColor}
              // onChangeText={setCompanyName}
              migrate
              onSubmitEditing={() => {
                //phoneNumberRef?.current.focus();
              }}
              returnKeyType={'next'}
            />
          </View>
          <View bg-greyDark marginT-10 borderRadius={10}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Branch"
              text14Medium
              textColor
              placeholderTextColor={Colors.textColor}
              // onChangeText={setCompanyName}
              migrate
              onSubmitEditing={() => {
                //phoneNumberRef?.current.focus();
              }}
              returnKeyType={'next'}
            />
          </View>
          <View bg-greyDark marginT-10 borderRadius={10}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="City"
              text14Medium
              textColor
              placeholderTextColor={Colors.textColor}
              // onChangeText={setCompanyName}
              migrate
              onSubmitEditing={() => {
                //phoneNumberRef?.current.focus();
              }}
              returnKeyType={'next'}
            />
          </View>
          <Button
            label={'Submit & Continue'}
            color="black"
            borderRadius={8}
            style={styles.button}
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
    height: elementHeight,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
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
  TextViewStyle: {
    marginEnd: 5,
    paddingTop: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
});
