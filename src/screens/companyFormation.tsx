import React, {useState} from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {observer} from 'mobx-react';
import _ from 'lodash';
import {ScreenComponent} from 'rnn-screens';
import {FreezoneModal} from '../components/freezoneModal';
import {MainHeader, CustomDialog} from '../components';
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
  LoaderScreen,
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
  {label: 'UAQ Free Trade Zone', value: 'UAQ Free Trade Zone'},
  {label: 'IFZA', value: 'RAK ICC'},
  {label: 'DMCC', value: 'DMCC'},
  {label: 'SAIF-Zone', value: 'SAIF-Zone'},
  {label: 'Dubai Airport Freezone', value: 'Dubai Airport Freezone'},
  {label: 'Jazfa - Jebel Ali Free Zone', value: 'Jazfa - Jebel Ali Free Zone'},
  {label: 'Dubai Healthcare City', value: 'Dubai Healthcare City'},
  {label: 'Sharjah Media Zone', value: 'Sharjah Media Zone'},
  {
    label: 'Ras Al Khaimah Economic Zone',
    value: 'Ras Al Khaimah Economic Zone',
  },
  {label: 'HAMRIYAH Free Zone Authoriy', value: 'HAMRIYAH Free Zone Authoriy'},
  {label: 'Dubai World Trade Center', value: 'Dubai World Trade Center'},
  {
    label: 'Khalifa Port Free Zone Authority',
    value: 'Khalifa Port Free Zone Authority',
  },
  {label: 'Fujairah Free Zone', value: 'Fujairah Free Zone'},
  {label: 'Ajman Free Zone', value: 'Ajman Free Zone'},
  {label: 'Dubai Silicon Oasis', value: 'Dubai Silicon Oasis'},
  {label: 'Abu Dhabi Airport Free Zone', value: 'Abu Dhabi Airport Free Zone'},
  {label: 'Abu Dhabi Global Market', value: 'Abu Dhabi Global Market'},
  {label: 'Abu Dhabhi Global Market', value: 'Abu Dhabhi Global Market'},
  {label: 'TwoFour54', value: 'TwoFour54'},
  {
    label: 'Industrial City of Adub Dhabi',
    value: 'Industrial City of Adub Dhabi',
  },
  {label: 'Dubai Internet City', value: 'Dubai Internet City'},
  {label: 'Dubai Academic City', value: 'Dubai Academic City'},
  {label: 'Dubai Biotech Research Park', value: 'Dubai Biotech Research Park'},
  {label: 'Dubai Design District', value: 'Dubai Design District'},
  {label: 'Gold & Diamond Park', value: 'Gold & Diamond Park'},
  {
    label: 'Dubai International FInancial Center',
    value: 'Dubai International FInancial Center',
  },
  {label: 'Dubai Media City', value: 'Dubai Media City'},
  {label: 'Dubai Outsource Zone', value: 'Dubai Outsource Zone'},
  {label: 'Dubai Industrial City', value: 'Dubai Industrial City'},
  {label: 'Dubai Knowledge Village', value: 'Dubai Knowledge Village'},
  {label: 'Dubai Studio City', value: 'Dubai Studio City'},
  {label: 'Dubai Techno Park', value: 'Dubai Techno Park'},
  {
    label: 'International Media Production Zone',
    value: 'International Media Production Zone',
  },
  {label: 'Fujairah Creative City', value: 'Fujairah Creative City'},
];
export type Props = {
  componentId: string;
};
export const CompanyFormation: ScreenComponent<Props> = observer(
  ({componentId}) => {
    const [show, setShow] = useState(false);
    const [freeZone, setfreeZone] = useState('');

    function onClosedPressed() {
      setShow(!show);
    }
    return (
      <>
        <MainHeader
          title={'Company Formation'}
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
                  <View marginT-1 padding-5 width={elementWidth}>
                    <Text text10Medium>Company Information</Text>
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
                    {errors.last_name && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.last_name}
                      </Text>
                    )}
                  </View>
                  <View marginT-1 width={elementWidth}>
                    <Text text10Medium>Company Owner</Text>
                  </View>
                  <View
                    marginT-5
                    bg-greyDark
                    width={elementWidth}
                    height={elementHeight}
                    borderWidth={
                      Colors.greyDark === Colors.greyLight ? 0.9 : 0
                    }>
                    <TextField
                      paddingT-5
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
                    {errors.business_name && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.business_name}
                      </Text>
                    )}
                  </View>
                  <View marginT-5 width={elementWidth}>
                    <Text text10Medium>Technical Details</Text>
                  </View>
                  <View>
                    <RadioGroup
                      paddingT-5
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
                            text12Medium
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
                        height={elementHeight}
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
                    disabled={!isValid}
                    onPress={handleSubmit}
                    style={styles.button}
                    text18Bold
                    backgroundColor={Colors.primary}
                  />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
        {stores.company.is_com_ops_loading && (
          <LoaderScreen overlay backgroundColor={Colors._blackish} />
        )}
        <CustomDialog loader={stores.company.is_success_modal_shown} />
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
