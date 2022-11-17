import React, {useState} from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import _ from 'lodash';
import {ScreenComponent} from 'rnn-screens';
import {FreezoneModal} from '../components/freezoneModal';
import {MainHeader} from '../components';
import {services} from '../services';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  RadioButton,
  Colors,
  Text,
  TextField,
  View,
  Picker,
  Icon,
  Button,
  RadioGroup,
} from 'react-native-ui-lib';
import {stores, Stores} from '../stores';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
const dropdown = require('../../assets/icons/chevronDown.png');
const dropdownIcon = <Icon source={dropdown} tintColor={Colors.white} />;
const ValidationSchema = yup.object().shape({
  first_name: yup.string().required('Required'),
  middle_name: yup.string().required('Required'),
  last_name: yup.string().required('Required'),
  business_name: yup.string().required('Required'),
});

const Freezoneoptions = [
  {label: '10', value: '10'},
  {label: '20-50', value: '20-25'},
  {label: '50-100', value: '50-100'},
];
export type Props = {
  componentId: string;
};
export const CompanyFormation: ScreenComponent<Props> = ({componentId}) => {
  const [show, setShow] = useState(false);
  const [freeZone, setfreeZone] = useState('');

  function onClosedPressed() {
    setShow(!show);
  }
  return (
    <View flex bg-bgColor>
      <MainHeader
        title={'Company Formation'}
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center>
          <Formik
            validationSchema={ValidationSchema}
            initialValues={{
              user_id: '',
              first_name: '',
              middle_name: '',
              last_name: '',
              business_name: '',
              technical_details: '',
              types_of_establishment: '',
              choose_emirates: '',
              emirates_freezone: '',
            }}
            onSubmit={values =>
              stores.company.attemptToPostCompanyData(values)
            }>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <View marginT-15 padding-5 width={elementWidth}>
                  <Text text12Medium>Company Information</Text>
                </View>
                <View
                  marginB-s2
                  height={elementHeight}
                  padding-5
                  bg-greyDark
                  borderRadius={2}
                  borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
                  width={elementWidth}>
                  <TextField
                    width={elementWidth}
                    height={elementHeight - 25}
                    name="first_name"
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    value={values.first_name}
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
                  {errors.first_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.first_name}
                    </Text>
                  )}
                </View>
                <View
                  marginB-s2
                  padding-5
                  bg-greyDark
                  height={elementHeight}
                  borderRadius={2}
                  borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
                  width={elementWidth}>
                  <TextField
                    name="middle_name"
                    onChangeText={handleChange('middle_name')}
                    onBlur={handleBlur('middle_name')}
                    value={values.middle_name}
                    width={elementWidth}
                    height={elementHeight - 25}
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
                  {errors.middle_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.middle_name}
                    </Text>
                  )}
                </View>

                <View
                  marginB-s2
                  padding-5
                  bg-greyDark
                  height={elementHeight}
                  borderRadius={2}
                  borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
                  width={elementWidth}>
                  <TextField
                    name="last_name"
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    value={values.last_name}
                    width={elementWidth}
                    height={elementHeight - 25}
                    hideUnderline={true}
                    blurOnSubmit={false}
                    style={styles.textField}
                    keyboardType="name"
                    placeholder="Last Name Preference"
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
                  {errors.last_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.last_name}
                    </Text>
                  )}
                </View>
                <View
                  marginT-5
                  width={elementWidth}
                  height={elementHeight}
                  borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
                  <TextField
                    name="business_name"
                    onChangeText={handleChange('business_name')}
                    onBlur={handleBlur('business_name')}
                    value={values.business_name}
                    width={elementWidth}
                    height={elementHeight - 25}
                    hideUnderline={true}
                    blurOnSubmit={false}
                    style={styles.textField}
                    keyboardType="name"
                    placeholder="Company owner Name"
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
                  {errors.business_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.business_name}
                    </Text>
                  )}
                </View>
                <View marginT-5 padding-5 width={elementWidth}>
                  <Text text12Medium>Technical Details</Text>
                </View>
                <View>
                  <RadioGroup
                    name="technical_details"
                    onChangeText={handleChange('technical_details')}
                    onBlur={handleBlur('technical_details')}
                    width={elementWidth}
                    initialValue={''}
                    onValueChange={res => (values.technical_details = res)}>
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <RadioButton
                          marginT-5
                          label={'LLC (100%)'}
                          value={'LLC (100%)'}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <RadioButton
                          marginT-5
                          label={'LLC (50/50)'}
                          value={'LLC (50/50)'}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <RadioButton
                          marginT-5
                          value={'Sole Proprietor'}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <RadioButton
                          marginT-5
                          value={'Establishment'}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <RadioButton
                          marginT-5
                          value={'Professional'}
                          label={'Professional'}
                          size={15}
                        />
                      </View>
                    </View>
                  </RadioGroup>
                </View>

                <View marginT-5 padding-5 width={elementWidth}>
                  <Text text12Medium>Choose</Text>
                </View>

                <RadioGroup
                  name="choose_emirates"
                  onChangeText={handleChange('choose_emirates')}
                  onBlur={handleBlur('choose_emirates')}
                  value={values.choose_emirates}
                  width={elementWidth}
                  initialValue={''}
                  onValueChange={res => (values.choose_emirates = res)}>
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
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'DXB'}
                        label={'DXB'}
                        size={15}
                      />
                    </View>
                    <View
                      width={'30%'}
                      marginL-15
                      marginB-s2
                      padding-5
                      bg-greyDark
                      borderRadius={2}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'AUH'}
                        label={'AUH'}
                        size={15}
                      />
                    </View>
                    <View
                      width={'30%'}
                      marginL-15
                      marginB-s2
                      padding-5
                      bg-greyDark
                      borderRadius={2}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'SHJ'}
                        label={'SHJ'}
                        size={15}
                      />
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
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'AJM'}
                        label={'AJM'}
                        size={15}
                      />
                    </View>
                    <View
                      width={'30%'}
                      marginL-15
                      marginB-s2
                      padding-5
                      bg-greyDark
                      borderRadius={2}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'UMQ'}
                        label={'UMQ'}
                        size={15}
                      />
                    </View>
                    <View
                      width={'30%'}
                      marginL-15
                      marginB-s2
                      padding-5
                      bg-greyDark
                      borderRadius={2}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'RAK'}
                        label={'RAK'}
                        size={15}
                      />
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
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <RadioButton
                        marginT-5
                        value={'FUJ'}
                        label={'FUJ'}
                        size={15}
                      />
                    </View>
                    <View
                      width={'30%'}
                      marginL-15
                      marginB-s2
                      padding-5
                      bg-greyDark
                      borderRadius={2}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <Picker
                        paddingR={10}
                        paddingL-2
                        migrateTextField
                        style={{height: elementHeight}}
                        value={freeZone}
                        showSearch
                        placeholder={'Freezone'}
                        placeholderTextColor={Colors.textColor}
                        trailingAccessory={dropdownIcon}
                        onChange={item => {
                          setfreeZone(item);
                          values.emirates_freezone = item.value;
                        }}>
                        {_.map(Freezoneoptions, option => (
                          <Picker.Item
                            key={option.value}
                            value={option}
                            label={option.label}
                          />
                        ))}
                      </Picker>
                    </View>
                    <View
                      width={'30%'}
                      marginL-15
                      marginB-s2
                      padding-5
                      borderRadius={2}></View>
                  </View>
                </RadioGroup>
                <Button
                  label={'Accept'}
                  color="black"
                  borderRadius={8}
                  onPress={handleSubmit}
                  style={styles.button}
                  backgroundColor={Colors.primary}
                />
              </>
            )}
          </Formik>
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
