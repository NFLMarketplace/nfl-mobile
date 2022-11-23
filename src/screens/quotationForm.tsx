import React from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {ScreenComponent} from 'rnn-screens';
import {services} from '../services';
import {MainHeader} from '../components';
import {
  Button,
  Colors,
  Text,
  TextField,
  View,
  TouchableOpacity,
  Icon,
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
export const QuotationForm: ScreenComponent<Props> = ({componentId}) => {
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
          <View flex row width={elementWidth}>
            <View
              width={'50%'}
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Text text10Medium>Quotation #</Text>
              <Text text18Bold>1-001</Text>
            </View>
            <View
              width={'45%'}
              marginL-15
              marginB-s2
              padding-5
              bg-greyDark
              borderRadius={2}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
              <Text text10Medium>Validity</Text>
              <Text text18Bold>5 days</Text>
            </View>
          </View>
          <View
            width={elementWidth}
            marginB-s2
            padding-5
            bg-greyDark
            borderRadius={2}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
            <Text text10Medium>Quoted To</Text>
            <TextField
              width={elementWidth - 5}
              height={elementHeight}
              hideUnderline={true}
              blurOnSubmit={false}
              style={styles.textField}
              keyboardType="name"
              placeholder="MS XXX Trading LLC"
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
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Description</Text>
              <Text text12Medium>Basmati Rice | indian origin</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Quantity</Text>
              <Text text12Medium>1000 KG</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Unit Price</Text>
              <Text text12Medium>40 AED per KG</Text>
            </View>
          </View>
          <View
            width={elementWidth}
            marginB-s2
            padding-5
            bg-greyDark
            borderRadius={2}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
            <View
              flex
              row
              style={{
                borderBottomWidth: 0.5,
                padding: 4,
                justifyContent: 'space-between',
                borderBottomColor: 'white',
              }}
              width={elementWidth - 5}>
              <Text text18Bold>Account Details</Text>
              <AntDesign name="caretdown" size={18} color="white" />
            </View>

            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Account Name</Text>
              <Text text12Medium>NFL GENERAL TRA</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Bank Name</Text>
              <Text text12Medium>Dubai Islamic Bank</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Account Number </Text>
              <Text text12Medium>XXXX-XXXX-XXXX-XX01</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>IBAN Number </Text>
              <Text text12Medium>XXXX-XXXX-XXXX-XX01</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Branch </Text>
              <Text text12Medium>Sheakh Zayed Road</Text>
            </View>
          </View>
          <View
            width={elementWidth}
            marginB-s2
            padding-5
            bg-greyDark
            borderRadius={2}
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.9 : 0}>
            <View
              style={{
                borderBottomWidth: 0.5,
                padding: 4,
                borderBottomColor: 'white',
              }}
              width={elementWidth - 5}>
              <Text text18Bold>Quotation Summary</Text>
            </View>

            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Subtotal</Text>
              <Text text12Medium>4000 AED</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Discount </Text>
              <Text text12Medium>%</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>VAT </Text>
              <Text text12Medium>200 AED</Text>
            </View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text12Medium>Delivery Cost </Text>
              <Text text12Medium>350 AED</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                padding: 4,
                borderBottomColor: 'white',
              }}
              width={elementWidth - 5}></View>
            <View flex row width={elementWidth} style={styles.TextViewStyle}>
              <Text text18Bold>Total Quote</Text>
              <Text text18Bold>4550.00 AED</Text>
            </View>
          </View>
          <View width={elementWidth}>
            <Text text12Medium color={Colors.yellow30}>
              Please note that this quote is only valid for the NEXT 5 days,
              after the order confirmation and 100% payment , the goods will be
              delivered in two working days to the requested warehouse
            </Text>
          </View>
          <Button
            label={'Accept'}
            color="black"
            borderRadius={8}
            style={styles.button}
            backgroundColor={Colors.primary}
          />
          <TouchableOpacity marginT-5>
            <Text text14Medium>Reject</Text>
          </TouchableOpacity>
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
