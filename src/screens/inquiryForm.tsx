import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {LoaderScreen, PanningProvider, Dialog} from 'react-native-ui-lib';
import {MainHeader} from '../components';
import {ScreenComponent} from 'rnn-screens';
import {stores} from '../stores';
import _ from 'lodash';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  Button,
  Colors,
  Text,
  TextField,
  View,
  Picker,
  Icon,
} from 'react-native-ui-lib';
function randomIntFromInterval(x) {
  // min and max included
  return Math.floor(Math.random() * x);
}
import {services} from '../services';
function DataShow() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  return currentDate;
}
const ValidationSchema = yup.object().shape({
  quantityInKg: yup.string().required('Required'),
  packagingInKg: yup.string().required('Required'),
  countryOfOrigin: yup.string().required('Required'),
  deliveryDays: yup.string().required('Required'),
  deliveryLocation: yup.string().required('Required'),
  deliveryArea: yup.string().required('Required'),
  adressLine1: yup.string().required('Required'),
  adressLine2: yup.string().required('Required'),
});

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
const dropdown = require('../../assets/icons/chevronDown.png');
const dropdownIcon = <Icon source={dropdown} tintColor={Colors.textColor} />;
const options = [
  {label: '10', value: '10'},
  {label: '20-50', value: '20-25'},
  {label: '50-100', value: '50-100'},
];
const paymentMethodData = [
  {label: 'Credit card', value: 'Credit card'},
  {label: 'Pay pal', value: 'Pay pal'},
  {label: 'Bank', value: 'Bank'},
];
const percentageData = [
  {label: '10', value: '10'},
  {label: '20', value: '20'},
  {label: '30', value: '30'},
];
const priorityData = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
];
export type Props = {
  componentId: string;
};
export const InquiryForm: ScreenComponent<Props> = observer(({componentId}) => {
  const [noofQoutation, setnoofQoutation] = useState('');
  const [Item, setItem] = useState('');
  const [paymentMethod, setpaymentMethod] = useState('');
  const [percentage, setpercentage] = useState('');
  const [priority, setpriority] = useState('');
  const currentDate = DataShow();
  const formNo =
    'NFL-0' +
    JSON.stringify(randomIntFromInterval(100)) +
    '-' +
    JSON.stringify(randomIntFromInterval(10000000));
  return (
  <>
      <MainHeader
        title={'NFL Inquiry Form'}
        leftIcon={'md-chevron-back'}
        leftIconAction={() => {
          services.nav.goToMain();
        }}
      />

      <ScrollView contentInsetAdjustmentBehavior="always" >
        <View flex center bg-bgColor>
          <Formik
            validationSchema={ValidationSchema}
            initialValues={{
              userid: 'Cod3PK',
              inquiryFormNo: formNo,
              date: currentDate,
              quantityInKg: '',
              packagingInKg: '',
              countryOfOrigin: '',
              deliveryDays: '',
              deliveryLocation: '',
              deliveryArea: '',
              adressLine1: '',
              adressLine2: '',
              notes: '',
              noofQoutation: '',
              item: '',
            }}
            onSubmit={values => stores.query.attemptToPostInquiryData(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <View flex row width={elementWidth}>
                  <View
                    width={elementWidth / 2}
                    height={elementHeight}
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <Text text10Medium>Inquiry Form#</Text>
                    <TextField
                      labelStyle={{fontSize: 15, fontWeight: 'bold'}}
                      label={formNo}
                      hideUnderline={true}
                      blurOnSubmit={false}
                      keyboardType="name"
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
                    height={elementHeight}
                    marginL-15
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <Text text10Medium>Date</Text>
                    <TextField
                      labelStyle={{fontSize: 15, fontWeight: 'bold'}}
                      label={currentDate}
                      hideUnderline={true}
                      blurOnSubmit={false}
                      keyboardType="name"
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
                <View width={elementWidth} padding-5>
                  <Text text10Medium>
                    Please specify the number of quotations you want to receive
                    for the inquiry
                  </Text>
                </View>

                <View
                  bg-greyDark
                  borderRadius={2}
                  borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}
                  width={elementWidth}
                  paddingH-10
                  height={elementHeight}>
                  <Picker
                    paddingR={10}
                    paddingL-2
                    migrateTextField
                    style={{height: elementHeight}}
                    value={noofQoutation}
                    showSearch
                    placeholder={'Quotation'}
                    placeholderTextColor={Colors.textColor}
                    trailingAccessory={dropdownIcon}
                    onChange={item => {
                      setnoofQoutation(item);
                      values.noofQoutation = item.value;
                      console.log(noofQoutation);
                    }}>
                    {_.map(options, option => (
                      <Picker.Item
                        key={option.value}
                        value={option}
                        label={option.label}
                      />
                    ))}
                  </Picker>
                  {errors.noofQoutation && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.noofQoutation}
                    </Text>
                  )}
                </View>
                <View padding-5 width={elementWidth} marginL-5>
                  <Text text12Medium color={Colors.yellow30}>
                    . You will be charged a total of 120 AED based on the number
                    of Quotations
                  </Text>
                </View>
                <View padding-5 width={elementWidth}>
                  <Text text12Medium>
                    Please specify the necessary information for your inquiry
                  </Text>
                </View>
                <View
                  width={elementWidth}
                  height={elementHeight}
                  marginB-s2
                  padding-5
                  bg-greyDark
                  borderRadius={2}
                  borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
                  <TextField
                    name="item"
                    onChangeText={handleChange('item')}
                    onBlur={handleBlur('item')}
                    value={values.item}
                    hideUnderline={true}
                    blurOnSubmit={false}
                    keyboardType="name"
                    placeholder="Items"
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
                  {errors.quantityInKg && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.quantityInKg}
                    </Text>
                  )}
                </View>

                <View flex row width={elementWidth} height={elementHeight + 10}>
                  <View
                    width={'50%'}
                    height={elementHeight}
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <TextField
                      name="quantityInKg"
                      onChangeText={handleChange('quantityInKg')}
                      onBlur={handleBlur('quantityInKg')}
                      value={values.quantityInKg}
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
                    {errors.quantityInKg && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.quantityInKg}
                      </Text>
                    )}
                  </View>
                  <View
                    width={'45%'}
                    height={elementHeight}
                    marginL-15
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <TextField
                      name="packagingInKg"
                      onChangeText={handleChange('packagingInKg')}
                      onBlur={handleBlur('packagingInKg')}
                      value={values.packagingInKg}
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
                    {errors.packagingInKg && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.packagingInKg}
                      </Text>
                    )}
                  </View>
                </View>
                <View flex row height={elementHeight + 10} width={elementWidth}>
                  <View
                    width={'50%'}
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <TextField
                      name="countryOfOrigin"
                      onChangeText={handleChange('countryOfOrigin')}
                      onBlur={handleBlur('countryOfOrigin')}
                      value={values.countryOfOrigin}
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
                    {errors.countryOfOrigin && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.countryOfOrigin}
                      </Text>
                    )}
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
                    <TextField
                      name="deliveryDays"
                      onChangeText={handleChange('deliveryDays')}
                      onBlur={handleBlur('deliveryDays')}
                      value={values.deliveryDays}
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
                    {errors.deliveryDays && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.deliveryDays}
                      </Text>
                    )}
                  </View>
                </View>
                <View flex row width={elementWidth} height={elementHeight + 10}>
                  <View
                    width={'50%'}
                    height={elementHeight}
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <TextField
                      name="deliveryLocation"
                      onChangeText={handleChange('deliveryLocation')}
                      onBlur={handleBlur('deliveryLocation')}
                      value={values.deliveryLocation}
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
                    {errors.deliveryLocation && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.deliveryLocation}
                      </Text>
                    )}
                  </View>
                  <View
                    width={'45%'}
                    height={elementHeight}
                    marginL-15
                    marginB-s2
                    padding-5
                    bg-greyDark
                    borderRadius={2}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <TextField
                      name="deliveryArea"
                      onChangeText={handleChange('deliveryArea')}
                      onBlur={handleBlur('deliveryArea')}
                      value={values.deliveryArea}
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
                    {errors.deliveryArea && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.deliveryArea}
                      </Text>
                    )}
                  </View>
                </View>
                <TextField
                  name="adressLine1"
                  onChangeText={handleChange('adressLine1')}
                  onBlur={handleBlur('adressLine1')}
                  value={values.adressLine1}
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
                {errors.adressLine1 && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                    }}>
                    {errors.adressLine1}
                  </Text>
                )}
                <TextField
                  name="adressLine2"
                  onChangeText={handleChange('adressLine2')}
                  onBlur={handleBlur('adressLine2')}
                  value={values.adressLine2}
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
                {errors.adressLine2 && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.adressLine2}
                  </Text>
                )}

                <TextField
                  name="notes"
                  onChangeText={handleChange('notes')}
                  onBlur={handleBlur('notes')}
                  value={values.notes}
                  keyboardType="email-address"
                  width={elementWidth}
                  height={120}
                  hideUnderline={true}
                  blurOnSubmit={false}
                  style={styles.textField}
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
                  disabled={!isValid}
                  onPress={handleSubmit}
                  style={styles.button}
                  backgroundColor={Colors.primary}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
        { stores.query.is_query_ops_loading && <LoaderScreen overlay backgroundColor={Colors._blackish} />}
<Dialog
 visible={stores.query.is_success_modal_shown}
 onDismiss={() => console.log('dismissed')}
 panDirection={PanningProvider.Directions.DOWN}
>
 {<Text text60>Content</Text>}
</Dialog>
    </>
  );
});

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
