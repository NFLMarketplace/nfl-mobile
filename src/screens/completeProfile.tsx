import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ScreenComponent} from 'rnn-screens';
import {
  Button,
  Colors,
  Text,
  TextField,
  View,
  TouchableOpacity,
  Icon,
  Picker,
} from 'react-native-ui-lib';
import {services} from '../services';
import {MainHeader} from '../components';
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
export const CompleteProfile: ScreenComponent<Props> = ({componentId}) => {
  return (
    <View flex bg-bgColor>
      <MainHeader
        title={'Set Up profile'}
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center>
          <View width={elementWidth} borderRadius={2}>
            <Text text16Medium>Business Details</Text>
          </View>
          <View bg-greyDark>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              borderRadius={2}
              paddingL-10
              keyboardType="name"
              placeholder="Nature of Business"
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
          <View bg-greyDark marginT-10>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Company Name"
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
            flex
            row
            width={elementWidth + 10}
            height={100}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{padding: 5}}> Upload Trade License</Text>
            </View>
            <View
              width={'46%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{padding: 5}}> Upload VAT Certificate</Text>
            </View>
          </View>
          <View
            flex
            row
            width={elementWidth + 10}
            height={100}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{padding: 5}}>MOA Certificate</Text>
            </View>
            <View
              width={'46%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}> Tenancy Office Contract</Text>
            </View>
          </View>
          <View
            width={120}
            height={30}
            marginT-10
            marginL-240
            borderRadius={20}
            style={{
              backgroundColor: '#D3AD39',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity paddingL-10>
              <Text text14Medium>+ Add Partner</Text>
            </TouchableOpacity>
          </View>
          <View bg-greyDark marginT-10>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Partner Name"
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
            flex
            row
            width={elementWidth + 10}
            height={100}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}> Partner Passport/VISA</Text>
            </View>
            <View
              width={'46%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}>Partner EID</Text>
            </View>
          </View>
          <View
            flex
            row
            width={elementWidth + 10}
            height={100}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}> Employee List</Text>
            </View>
            <View
              width={'46%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}> Immigration Card</Text>
            </View>
          </View>
          <View
            flex
            row
            width={elementWidth + 10}
            height={100}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}> Labour Card</Text>
            </View>
            <View
              width={'46%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center', alignItems: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
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
              <Text style={{paddingTop: 5}}>Ejari</Text>
            </View>
          </View>

          <View bg-greyDark marginT-10>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Business Email"
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
          <View bg-greyDark marginT-10>
            <TextField
              width={elementWidth}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              paddingL-10
              keyboardType="name"
              placeholder="Website"
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
            flex
            row
            width={elementWidth + 10}
            height={elementHeight}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                padding-8
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Landline # 1"
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
              width={'46%'}
              bg-greyDark
              borderRadius={2}
              style={{justifyContent: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                padding-8
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Landline # 2"
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
          </View>
          <View
            flex
            row
            width={elementWidth + 10}
            height={elementHeight}
            marginT-10
            style={{justifyContent: 'space-between'}}>
            <View
              width={'45%'}
              bg-greyDark
              borderRadius={4}
              style={{justifyContent: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                padding-8
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Mobile # 2"
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
              width={'46%'}
              bg-greyDark
              borderRadius={4}
              style={{justifyContent: 'center'}}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <TextField
                padding-8
                hideUnderline={true}
                blurOnSubmit={false}
                keyboardType="name"
                placeholder="Mobile # 2"
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
            </View>
          </View>
          <View
            width={elementWidth + 10}
            height={elementHeight}
            bg-greyDark
            marginT-10>
            <Picker
              padding-8
              placeholder={'City'}
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
            width={elementWidth + 10}
            height={elementHeight}
            bg-greyDark
            marginT-10>
            <Picker
              padding-8
              placeholder={'Country'}
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
