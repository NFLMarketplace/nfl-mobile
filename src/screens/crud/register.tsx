import {observer} from 'mobx-react';
import React, {useRef, useState} from 'react';
import {
  Alert,
  ActivityIndicator,
  Dimensions,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {
  Button,
  Colors,
  Image,
  KeyboardAwareScrollView,
  Text,
  TextField,
  View,
  TouchableOpacity,
  Checkbox,
} from 'react-native-ui-lib';
import {If} from '@kanzitelli/if-component';

import {Row} from '../../components/row';
import {screens} from '../index';
import {stores} from '../../stores';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
const defaultBorderRadius = 5;

export const Register: NavigationFunctionComponent = observer(
  ({componentId}) => {
    const [companyName, setCompanyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const companyNameRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmitPress = () => {
      if (!companyName) {
        Alert.alert('Alert', 'Please enter Company Name');
        return;
      }

      if (!phoneNumber) {
        Alert.alert('Alert', 'Please enter Phone Number');
        return;
      }
      if (!email) {
        Alert.alert('Alert', 'Please enter Email');
        return;
      }
      if (!password) {
        Alert.alert('alert', 'please enter password');
        return;
      }
      if (!agreed) {
        Alert.alert('alert', 'Please Agree with Terms');
        return;
      }
      stores.user.attemptToRegister(companyName, phoneNumber, email, password);
    };

    return (
      <>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainer}>
          <View center flex>
            <View center marginB-s10>
              <Image
                assetName="logo"
                style={styles.logoImage}
                resizeMode="contain"
              />
              <Text text28Bold textColor>
                MARKET PLACE
              </Text>
            </View>
            <View bottom marginB-s2>
              <Text text24Bold margin-s2 textColor>
                Register to Get Started
              </Text>
              <View
                bg-greyDark
                borderRadius={defaultBorderRadius}
                borderWidth={Colors.greyDark === Colors.greyLight ? 0.2 : 0}>
                <TextField
                  width={elementWidth}
                  height={elementHeight}
                  ref={companyNameRef}
                  hideUnderline={true}
                  blurOnSubmit={false}
                  style={styles.textField}
                  keyboardType="name"
                  placeholder="Company Name"
                  text14Medium
                  textColor
                  placeholderTextColor={Colors.textColor}
                  onChangeText={setCompanyName}
                  migrate
                  onSubmitEditing={() => {
                    phoneNumberRef?.current.focus();
                  }}
                  returnKeyType={'next'}
                />
              </View>
            </View>

            <View
              marginB-s2
              bg-greyDark
              borderRadius={defaultBorderRadius}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.2 : 0}>
              <TextField
                width={elementWidth}
                height={elementHeight}
                ref={phoneNumberRef}
                hideUnderline={true}
                blurOnSubmit={false}
                style={styles.textField}
                placeholder="Phone Number"
                text14Medium
                keyboardType={'number-pad'}
                textColor
                placeholderTextColor={Colors.textColor}
                onChangeText={setPhoneNumber}
                migrate
                onSubmitEditing={() => {
                  emailRef?.current.focus();
                }}
                returnKeyType={'next'}
              />
            </View>
            <View
              marginB-s2
              bg-greyDark
              borderRadius={8}
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.2 : 0}>
              <TextField
                width={elementWidth}
                height={elementHeight}
                ref={emailRef}
                hideUnderline={true}
                blurOnSubmit={false}
                style={styles.textField}
                keyboardType="email-address"
                placeholder="Email"
                text14Medium
                textColor
                placeholderTextColor={Colors.textColor}
                onChangeText={setEmail}
                migrate
                onSubmitEditing={() => {
                  passwordRef?.current.focus();
                }}
                returnKeyType={'next'}
              />
            </View>
            <View
              borderWidth={Colors.greyDark === Colors.greyLight ? 0.2 : 0}
              marginB-s2
              bg-greyDark
              br-8
              borderRadius={defaultBorderRadius}>
              <TextField
                text12Regular
                width={elementWidth}
                height={elementHeight}
                hideUnderline={true}
                blurOnSubmit={true}
                ref={passwordRef}
                secureTextEntry={true}
                style={styles.textField}
                textColor
                text14Medium
                placeholder="Password"
                placeholderTextColor={Colors.textColor}
                onChangeText={setPassword}
                migrate
                onSubmitEditing={() => {
                  handleSubmitPress();
                }}
              />
            </View>
            <View left width={'85%'} marginT-s2>
              <Row>
                <Checkbox
                  style={
                    agreed ? styles.checkboxSelected : styles.checkboxUnSelected
                  }
                  iconColor={Colors.white}
                  outline
                  value={agreed}
                  onValueChange={() => setAgreed(!agreed)}
                />
                <TouchableOpacity padding-s2>
                  <Text text10Medium textColor>
                    I accept Terms of Service
                  </Text>
                </TouchableOpacity>
              </Row>
            </View>
            <View centerH margin-s5 width={'80%'}>
              <Button
                borderRadius={defaultBorderRadius}
                style={styles.button}
                animateLayout={stores.user.is_user_ops_loading}
                backgroundColor={Colors.primary}
                onPress={() => {
                  Keyboard.dismiss();
                  handleSubmitPress();
                }}>
                <If
                  _={stores.user.is_user_ops_loading}
                  _then={
                    <View>
                      <ActivityIndicator
                        color={Colors.bgColor}
                        size={'large'}
                      />
                    </View>
                  }
                  _else={<Text text18Bold>Register</Text>}
                />
              </Button>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View center marginB-10>
          <TouchableOpacity
            padding-s2
            onPress={() => {
              screens.pop(componentId);
            }}>
            <Text text12Medium textColor>
              Already register on NFL?{' '}
              <Text text12Medium primary>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
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
    padding: 10,
    height: elementHeight,
    flexDirection: 'row',
    width: elementWidth,
  },
  logoImage: {
    height: logoHeight,
    width: screenWidth,
  },
  button: {
    height: 48,
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
