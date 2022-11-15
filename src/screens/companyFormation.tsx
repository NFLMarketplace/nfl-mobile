import React, {useState} from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {ScreenComponent} from 'rnn-screens';
import {FreezoneModal} from '../components/freezoneModal';
import {MainHeader} from '../components';
import {services} from '../services';
import {
  RadioButton,
  Colors,
  Text,
  TextField,
  View,
  TouchableOpacity,
  Icon,
  Button,
} from 'react-native-ui-lib';
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
export const CompanyFormation: ScreenComponent<Props> = ({componentId}) => {
  const [show, setShow] = useState(false);
  function onClosedPressed() {
    setShow(!show);
  }
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
          <View marginT-15 padding-5 width={elementWidth}>
            <Text text12Medium>Company Information</Text>
          </View>
          <View
            marginB-s2
            padding-5
            bg-greyDark
            borderRadius={10}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
            width={elementWidth}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              style={styles.textField}
              keyboardType="name"
              placeholder="First Name Preference"
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
          <View
            marginB-s2
            padding-5
            bg-greyDark
            borderRadius={10}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
            width={elementWidth}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              style={styles.textField}
              keyboardType="name"
              placeholder="Second Name Preference"
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

          <View
            marginB-s2
            padding-5
            bg-greyDark
            borderRadius={10}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
            width={elementWidth}>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              style={styles.textField}
              keyboardType="name"
              placeholder="Third Name Preference"
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
          <View marginT-5 padding-5 width={elementWidth}>
            <Text text12Medium>Company Owner</Text>
            <Text text12Medium></Text>
          </View>
          <View marginT-5 padding-5 width={elementWidth}>
            <Text text12Medium>Technical Details</Text>
          </View>
          <View flex row width={elementWidth}>
            <View
              flex
              left
              height={elementHeight}
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton
                marginT-5
                value={null}
                label={'LLC (100%)'}
                size={15}
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
              <RadioButton
                marginT-5
                value={null}
                label={'LLC (50/50)'}
                size={15}
              />
            </View>
          </View>
          <View flex row width={elementWidth}>
            <View
              flex
              left
              height={elementHeight}
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton
                marginT-5
                value={null}
                label={'Sole Proprietor'}
                size={15}
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
              <RadioButton
                marginT-5
                value={null}
                label={'Establishment'}
                size={15}
              />
            </View>
          </View>
          <View width={elementWidth}>
            <View
              flex
              left
              width={'50%'}
              height={elementHeight}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton
                marginT-5
                value={null}
                label={'Professional'}
                size={15}
              />
            </View>
          </View>
          <View marginT-5 padding-5 width={elementWidth}>
            <Text text12Medium>Choose</Text>
          </View>
          <View flex row width={elementWidth}>
            <View
              flex
              left
              height={elementHeight}
              width={'30%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'DXB'} size={15} />
            </View>
            <View
              width={'30%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'AUH'} size={15} />
            </View>
            <View
              width={'30%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'SHJ'} size={15} />
            </View>
          </View>
          <View flex row width={elementWidth}>
            <View
              flex
              left
              height={elementHeight}
              width={'30%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'AJM'} size={15} />
            </View>
            <View
              width={'30%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'UMQ'} size={15} />
            </View>
            <View
              width={'30%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'RAK'} size={15} />
            </View>
          </View>
          <View flex row width={elementWidth}>
            <View
              flex
              left
              height={elementHeight}
              width={'30%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <RadioButton marginT-5 value={null} label={'FUJ'} size={15} />
            </View>
            <View
              width={'30%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TouchableOpacity
                flex
                row
                paddingT-10
                style={{
                  padding: 4,
                  justifyContent: 'space-between',
                }}
                onPress={() => setShow(true)}>
                <Text text14Medium>Freezone</Text>
                <AntDesign name="caretdown" size={14} color="white" />
              </TouchableOpacity>
            </View>
            <View
              width={'30%'}
              marginL-15
              marginB-s2
              padding-5
              borderRadius={2}
              borderWidth={
                Colors.greyDark === Colors.greyLight ? 0.9 : 0
              }></View>
          </View>
          <Button
            label={'Accept'}
            color="black"
            borderRadius={8}
            style={styles.button}
            backgroundColor={Colors.primary}
          />
          <FreezoneModal show={show} onClosedPressed={onClosedPressed} />
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
