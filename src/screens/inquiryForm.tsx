import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {MainHeader} from '../components';
import {ScreenComponent} from 'rnn-screens';
import {
  Button,
  Colors,
  Text,
  TextField,
  View,
  Picker,
  Icon,
} from 'react-native-ui-lib';
import {services} from '../services';
import {Main} from './main';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
const dropdown = require('../../assets/icons/chevronDown.png');
const dropdownIcon = <Icon source={dropdown} tintColor={Colors.white} />;

export type Props = {
  componentId: string;
};
export const InquiryForm: ScreenComponent<Props> = ({componentId}) => {
  return (
    <View flex bg-bgColor>
      <MainHeader
        title={'NFL Inquiry Form'}
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />

      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center>
          <View flex row width={elementWidth}>
            <View
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Text text10Medium>Inquiry Form#</Text>
              <Text text18Bold>NFL-06122-001</Text>
            </View>
            <View
              width={'45%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Text text10Medium>Date</Text>
              <Text text18Bold>06-10-2022</Text>
            </View>
          </View>
          <View padding-5 marginL-25>
            <Text text10Medium>
              Please specify the number of quotations you want to receive for
              the inquiry
            </Text>
          </View>
          <TextField
            width={elementWidth}
            height={elementHeight}
            hideUnderline={true}
            blurOnSubmit={false}
            style={styles.textField}
            keyboardType="name"
            placeholder="No of Quotations"
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
          <View padding-5 marginL-15>
            <Text text12Medium color={Colors.yellow30}>
              . You will be charged a total of 120 AED based on the number of
              Quotations
            </Text>
          </View>
          <View padding-5 marginL-45 width={'100%'}>
            <Text text12Medium>
              Please specify the necessary information for your inquiry
            </Text>
          </View>
          <View width={'100%'} paddingL-30 paddingR-30>
            <Picker
              placeholder={'Item'}
              placeholderTextColor={Colors.white}
              trailingAccessory={dropdownIcon}
              migrateTextField
              showSearch
              pickerModalProps={{
                animated: true,
                animationType: 'slide',
              }}
              onChange={() => console.log('changed')}
              enableErrors></Picker>
          </View>

          <View flex row width={elementWidth}>
            <View
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Quantity (in KG)"
                text12ExtraBold
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
            <View
              width={'45%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Packaging (in KG)"
                text12ExtraBold
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
          </View>
          <View flex row width={elementWidth}>
            <View
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Country of Origin"
                text12ExtraBold
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
            <View
              width={'45%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Delivery Days"
                text12ExtraBold
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
          </View>
          <View flex row width={elementWidth}>
            <View
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Delivery Location"
                text12ExtraBold
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
            <View
              width={'45%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Delivery Area"
                text12ExtraBold
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
          </View>
          <TextField
            width={elementWidth}
            height={elementHeight}
            hideUnderline={true}
            blurOnSubmit={false}
            style={styles.textField}
            keyboardType="name"
            placeholder="Adress Line 1"
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
          <TextField
            width={elementWidth}
            height={elementHeight}
            hideUnderline={true}
            blurOnSubmit={false}
            style={styles.textField}
            keyboardType="name"
            placeholder="Adress Line 2"
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
          <View flex row width={elementWidth} marginT-10>
            <View
              width={'50%'}
              height={60}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Picker
                placeholder={'Payment Method'}
                placeholderTextColor={Colors.white}
                trailingAccessory={dropdownIcon}
                migrateTextField
                showSearch
                pickerModalProps={{
                  animated: true,
                  animationType: 'slide',
                }}
                onChange={() => console.log('changed')}
                enableErrors></Picker>
            </View>
            <View
              width={'45%'}
              height={60}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Picker
                placeholder={'Advance (%)'}
                placeholderTextColor={Colors.white}
                trailingAccessory={dropdownIcon}
                migrateTextField
                showSearch
                pickerModalProps={{
                  animated: true,
                  animationType: 'slide',
                }}
                onChange={() => console.log('changed')}
                enableErrors></Picker>
            </View>
          </View>
          <View flex row width={elementWidth} marginT-10>
            <View
              width={'50%'}
              height={60}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Picker
                placeholder={'Priority'}
                placeholderTextColor={Colors.white}
                trailingAccessory={dropdownIcon}
                migrateTextField
                showSearch
                pickerModalProps={{
                  animated: true,
                  animationType: 'slide',
                }}
                onChange={() => console.log('changed')}
                enableErrors></Picker>
            </View>
            <View
              width={'45%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="P Charges"
                text12ExtraBold
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
          </View>
          <TextField
            width={elementWidth}
            height={120}
            hideUnderline={true}
            blurOnSubmit={false}
            style={styles.textField}
            keyboardType="name"
            placeholder="Notes (optional)"
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
          <Button
            label={'Submit inquiry'}
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
