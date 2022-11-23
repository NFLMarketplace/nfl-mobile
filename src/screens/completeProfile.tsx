import React, {useState} from 'react';
import {ScrollView, Dimensions, StyleSheet, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ScreenComponent} from 'rnn-screens';
import _ from 'lodash';
import {
  Button,
  Colors,
  Text,
  TextField,
  View,
  TouchableOpacity,
  Icon,
  Picker,
  LoaderScreen,
} from 'react-native-ui-lib';
import {services} from '../services';
import {MainHeader, CustomDialog} from '../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import {observer} from 'mobx-react';
import {stores} from '../stores';
const ValidationSchema = yup.object().shape({
  nature_of_business: yup.string().required('Required'),
  company_name: yup.string().required('Required'),
  partner_name: yup.string().required('Required'),
  partner_business_email: yup.string().required('Required'),
  partner_website: yup.string().required('Required'),
  partner_landline: yup.string().required('Required'),
  partner_landline_2: yup.string().required('Required'),
  partner_mobile: yup.string().required('Required'),
  partner_mobile_2: yup.string().required('Required'),
});

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
const dropdown = require('../../assets/icons/chevronDown.png');
import * as ImagePicker from 'expo-image-picker';
const city = [
  {label: '10', value: '10'},
  {label: '20-50', value: '20-25'},
  {label: '50-100', value: '50-100'},
];

const dropdownIcon = <Icon source={dropdown} tintColor={Colors.textColor} />;
export type Props = {
  componentId: string;
};
export const CompleteProfile: ScreenComponent<Props> = observer(
  ({componentId}) => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);
    const [image7, setImage7] = useState(null);
    const [image8, setImage8] = useState(null);
    const [image9, setImage9] = useState(null);
    const [image10, setImage10] = useState(null);
    const [buttonDecider1, setbuttonDecider1] = useState(true);
    const [buttonDecider2, setbuttonDecider2] = useState(true);
    const [buttonDecider3, setbuttonDecider3] = useState(true);
    const [buttonDecider4, setbuttonDecider4] = useState(true);
    const [buttonDecider5, setbuttonDecider5] = useState(true);
    const [buttonDecider6, setbuttonDecider6] = useState(true);
    const [buttonDecider7, setbuttonDecider7] = useState(true);
    const [buttonDecider8, setbuttonDecider8] = useState(true);
    const [buttonDecider9, setbuttonDecider9] = useState(true);
    const [buttonDecider10, setbuttonDecider10] = useState(true);
    const [imagedecider1, setimagedecider1] = useState(false);
    const [imagedecider2, setimagedecider2] = useState(false);
    const [imagedecider3, setimagedecider3] = useState(false);
    const [imagedecider4, setimagedecider4] = useState(false);
    const [imagedecider5, setimagedecider5] = useState(false);
    const [imagedecider6, setimagedecide6] = useState(false);
    const [imagedecider7, setimagedecider7] = useState(false);
    const [imagedecider8, setimagedecider8] = useState(false);
    const [imagedecider9, setimagedecider9] = useState(false);
    const [imagedecider10, setimagedecider10] = useState(false);
    const [cityName, setcityName] = useState('');

    return (
      <>
        <MainHeader
          title={'Set Up profile'}
          leftIcon={'md-chevron-back'}
          leftIconAction={() => {
            services.nav.goToMain();
          }}
        />
        <ScrollView contentInsetAdjustmentBehavior="always">
          <View flex center bg-bgColor>
            <Formik
              validationSchema={ValidationSchema}
              initialValues={{
                user_id: '',
                nature_of_business: '',
                company_name: '',
                trade_license: '',
                vat_license: '',
                moa_certificate: '',
                tenancy_office_contract: '',
                partner_name: '',
                partner_passport_visa: '',
                partner_eid: '',
                partner_employee_list: '',
                partner_immigration_card: '',
                partner_labour_card: '',
                partner_ejari: '',
                partner_business_email: '',
                partner_website: '',
                partner_landline: '',
                partner_landline_2: '',
                partner_mobile: '',
                partner_mobile_2: '',
                partner_city: '',
                partner_country: '',
              }}
              onSubmit={values =>
                stores.profile.attemptToPostInquiryData(values)
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
                  <View flex center>
                    <View width={elementWidth} borderRadius={2} paddingB-5>
                      <Text text16Medium>Business Details</Text>
                    </View>
                    <View
                      bg-greyDark
                      height={elementHeight}
                      paddingL-10
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <TextField
                        width={elementWidth}
                        paddingT-10
                        height={elementHeight - 25}
                        name="nature_of_business"
                        onChangeText={handleChange('nature_of_business')}
                        onBlur={handleBlur('nature_of_business')}
                        value={values.nature_of_business}
                        hideUnderline={true}
                        blurOnSubmit={false}
                        borderRadius={2}
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
                      {errors.nature_of_business && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.nature_of_business}
                        </Text>
                      )}
                    </View>
                    <View
                      bg-greyDark
                      height={elementHeight}
                      paddingL-10
                      marginT-10
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <TextField
                        width={elementWidth}
                        paddingT-10
                        height={elementHeight - 25}
                        name="company_name"
                        onChangeText={handleChange('company_name')}
                        onBlur={handleBlur('company_name')}
                        value={values.company_name}
                        hideUnderline={true}
                        blurOnSubmit={false}
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
                      {errors.company_name && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.company_name}
                        </Text>
                      )}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider1 && (
                          <Image
                            source={{uri: image1}}
                            style={{width: elementWidth * 0.45, height: 90}}
                          />
                        )}
                        {buttonDecider1 && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage1(result.uri);
                                }
                                setimagedecider1(true);
                                setbuttonDecider1(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}>
                              {' '}
                              Upload Trade License
                            </Text>
                          </View>
                        )}
                      </View>
                      <View
                        width={'46%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider2 && (
                          <Image
                            source={{uri: image2}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider2 && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage2(result.uri);
                                }
                                setimagedecider2(true);
                                setbuttonDecider2(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}>
                              {' '}
                              Upload VAT Certificate
                            </Text>
                          </View>
                        )}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider3 && (
                          <Image
                            source={{uri: image3}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider3 && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage3(result.uri);
                                }
                                setimagedecider3(true);
                                setbuttonDecider3(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}> MOA Certificate</Text>
                          </View>
                        )}
                      </View>
                      <View
                        width={'46%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider4 && (
                          <Image
                            source={{uri: image4}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider4 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage4(result.uri);
                                }
                                setimagedecider4(true);
                                setbuttonDecider4(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}>
                              {' '}
                              Tenancy Office Contract
                            </Text>
                          </View>
                        )}
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
                    <View
                      bg-greyDark
                      height={elementHeight}
                      paddingL-10
                      marginT-10
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <TextField
                        width={elementWidth}
                        paddingT-10
                        height={elementHeight - 25}
                        name="partner_name"
                        onChangeText={handleChange('partner_name')}
                        onBlur={handleBlur('partner_name')}
                        value={values.partner_name}
                        hideUnderline={true}
                        blurOnSubmit={false}
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
                      {errors.partner_name && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.partner_name}
                        </Text>
                      )}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider5 && (
                          <Image
                            source={{uri: image5}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider5 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage5(result.uri);
                                }
                                setimagedecider5(true);
                                setbuttonDecider5(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}>
                              {' '}
                              Partner Passport/VISA
                            </Text>
                          </View>
                        )}
                      </View>
                      <View
                        width={'46%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider6 && (
                          <Image
                            source={{uri: image6}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider6 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage6(result.uri);
                                }
                                setimagedecide6(true);
                                setbuttonDecider6(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}> Partner EID</Text>
                          </View>
                        )}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider7 && (
                          <Image
                            source={{uri: image7}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider7 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage7(result.uri);
                                }
                                setimagedecider7(true);
                                setbuttonDecider7(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}> Employee List</Text>
                          </View>
                        )}
                      </View>
                      <View
                        width={'46%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider8 && (
                          <Image
                            source={{uri: image8}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider8 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage8(result.uri);
                                }
                                setimagedecider8(true);
                                setbuttonDecider8(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}> Immigration Card</Text>
                          </View>
                        )}
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
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider9 && (
                          <Image
                            source={{uri: image9}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider9 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage9(result.uri);
                                }
                                setimagedecider9(true);
                                setbuttonDecider9(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}>Labour Card</Text>
                          </View>
                        )}
                      </View>
                      <View
                        width={'46%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        {imagedecider10 && (
                          <Image
                            source={{uri: image10}}
                            style={{width: elementWidth * 0.45, height: 100}}
                          />
                        )}
                        {buttonDecider10 && (
                          <View
                            width={elementWidth}
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <TouchableOpacity
                              style={{
                                width: 46,
                                height: 46,
                                borderRadius: 23,
                                backgroundColor: '#F2C94C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={async () => {
                                let result =
                                  await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes:
                                      ImagePicker.MediaTypeOptions.All,
                                    allowsEditing: false,

                                    quality: 1,
                                  });
                                if (!result.cancelled) {
                                  setImage10(result.uri);
                                }
                                setimagedecider10(true);
                                setbuttonDecider10(false);
                              }}>
                              <Ionicons name="add" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{padding: 5}}> Ejari</Text>
                          </View>
                        )}
                      </View>
                    </View>

                    <View
                      bg-greyDark
                      marginT-10
                      paddingL-10
                      height={elementHeight}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <TextField
                        paddingT-10
                        width={elementWidth}
                        height={elementHeight - 25}
                        name="partner_business_email"
                        onChangeText={handleChange('partner_business_email')}
                        onBlur={handleBlur('partner_business_email')}
                        value={values.partner_business_email}
                        hideUnderline={true}
                        blurOnSubmit={false}
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
                      {errors.partner_business_email && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.partner_business_email}
                        </Text>
                      )}
                    </View>
                    <View
                      bg-greyDark
                      marginT-10
                      paddingL-10
                      height={elementHeight}
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <TextField
                        paddingT-10
                        name="partner_website"
                        onChangeText={handleChange('partner_website')}
                        onBlur={handleBlur('partner_website')}
                        value={values.partner_website}
                        width={elementWidth}
                        height={elementHeight - 25}
                        hideUnderline={true}
                        blurOnSubmit={false}
                        keyboardType="name"
                        placeholder="Website"
                        text14Medium
                        textColor
                        placeholderTextColor={Colors.textColor}
                        // onChangeText={setCompanyName}
                        migrate
                        onSubmitEditing={() => {
                          //phoneNumberRef?.current.foc7us();
                        }}
                        returnKeyType={'next'}
                      />
                      {errors.partner_website && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.partner_website}
                        </Text>
                      )}
                    </View>

                    <View
                      flex
                      row
                      width={elementWidth + 10}
                      height={elementHeight}
                      marginT-10
                      style={{justifyContent: 'space-between'}}>
                      <View
                        paddingL-10
                        height={elementHeight}
                        width={'45%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <TextField
                          paddingT-10
                          height={elementHeight - 25}
                          name="partner_landline"
                          onChangeText={handleChange('partner_landline')}
                          onBlur={handleBlur('partner_landline')}
                          value={values.partner_landline}
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
                        {errors.partner_landline && (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.partner_landline}
                          </Text>
                        )}
                      </View>
                      <View
                        paddingL-10
                        height={elementHeight}
                        width={'46%'}
                        bg-greyDark
                        borderRadius={2}
                        style={{justifyContent: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <TextField
                          paddingT-10
                          height={elementHeight - 25}
                          name="partner_landline_2"
                          onChangeText={handleChange('partner_landline_2')}
                          onBlur={handleBlur('partner_landline_2')}
                          value={values.partner_landline_2}
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
                        {errors.partner_landline_2 && (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.partner_landline_2}
                          </Text>
                        )}
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
                        paddingL-10
                        height={elementHeight}
                        width={'45%'}
                        bg-greyDark
                        borderRadius={4}
                        style={{justifyContent: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <TextField
                          paddingT-10
                          height={elementHeight - 25}
                          name="partner_mobile"
                          onChangeText={handleChange('partner_mobile')}
                          onBlur={handleBlur('partner_mobile')}
                          value={values.partner_mobile}
                          hideUnderline={true}
                          blurOnSubmit={false}
                          keyboardType="name"
                          placeholder="Mobile # 1"
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
                        {errors.partner_mobile && (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.partner_mobile}
                          </Text>
                        )}
                      </View>
                      <View
                        paddingL-10
                        height={elementHeight}
                        width={'46%'}
                        bg-greyDark
                        borderRadius={4}
                        style={{justifyContent: 'center'}}
                        borderWidth={
                          Colors.greyDark === Colors.greyLight ? 0.9 : 0
                        }>
                        <TextField
                          paddingT-10
                          height={elementHeight - 25}
                          name="partner_mobile_2"
                          onChangeText={handleChange('partner_mobile_2')}
                          onBlur={handleBlur('partner_mobile_2')}
                          value={values.partner_mobile_2}
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
                        {errors.partner_mobile_2 && (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.partner_mobile_2}
                          </Text>
                        )}
                      </View>
                    </View>
                    <View
                      width={elementWidth + 10}
                      height={elementHeight}
                      bg-greyDark
                      marginT-10
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <TextField
                        marginT-10
                        marginL-10
                        width={elementWidth}
                        height={elementHeight}
                        hideUnderline={true}
                        blurOnSubmit={false}
                        paddingL-10
                        keyboardType="name"
                        label="UAE"
                        text14Medium
                        textColor
                        labelTextColor={Colors.textColor}
                        // onChangeText={setCompanyName}
                        migrate
                        onSubmitEditing={() => {
                          //phoneNumberRef?.current.focus();
                        }}
                        returnKeyType={'next'}
                      />
                    </View>
                    <View
                      width={elementWidth + 10}
                      height={elementHeight}
                      bg-greyDark
                      marginT-10
                      paddingH-8
                      borderWidth={
                        Colors.greyDark === Colors.greyLight ? 0.9 : 0
                      }>
                      <Picker
                        paddingL-2
                        migrateTextField
                        style={{height: elementHeight}}
                        value={cityName}
                        showSearch
                        placeholder={'City Name'}
                        placeholderTextColor={Colors.textColor}
                        trailingAccessory={dropdownIcon}
                        onChange={item => {
                          setcityName(item);
                          // values.noofQoutation = item.value;
                        }}>
                        {_.map(city, option => (
                          <Picker.Item
                            key={option.value}
                            value={option}
                            label={option.label}
                          />
                        ))}
                      </Picker>
                    </View>
                    <Button
                      label={'Submit & Continue'}
                      color="black"
                      borderRadius={8}
                      onPress={handleSubmit}
                      style={styles.button}
                      backgroundColor={Colors.primary}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
        {stores.profile.is_query_ops_loading && (
          <LoaderScreen overlay backgroundColor={Colors._blackish} />
        )}
        {stores.profile.is_success_modal_shown && (
          <CustomDialog loader={true} />
        )}
      </>
    );
  },
);

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
