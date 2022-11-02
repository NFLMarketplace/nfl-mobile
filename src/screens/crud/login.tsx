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
} from 'react-native-ui-lib';
import {If} from '@kanzitelli/if-component';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

export const Login: NavigationFunctionComponent = observer(({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmitPress = () => {
    if (!email) {
      Alert.alert('Alert', 'Please enter Email');
      return;
    }
    if (!password) {
      Alert.alert('Alert', 'Please enter Password');
      return;
    }
    //   stores.user.attemptToLogin(email, password);
  };

  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <View center height={'80%'}>
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
              Login to Get Started
            </Text>
            <View
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
          </View>
          <View
            borderWidth={Colors.greyDark === Colors.greyLight ? 0.2 : 0}
            bg-greyDark
            br-8
            borderRadius={8}
            marginT-s2>
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
              placeholder="Password"
              placeholderTextColor={Colors.textColor}
              onChangeText={setPassword}
              migrate
              onSubmitEditing={() => {
                handleSubmitPress();
              }}
            />
          </View>
          <View right width={'90%'} marginT-s2>
            <TouchableOpacity padding-s2>
              <Text text10Medium>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View centerH margin-s5 width={'80%'}>
            <Button
              borderRadius={8}
              style={styles.button}
              animateLayout={true}
              backgroundColor={Colors.primary}
              onPress={() => {
                Keyboard.dismiss();
                handleSubmitPress();
              }}>
              <If
                _={false}
                _then={
                  <View>
                    <ActivityIndicator color={Colors.white} size={'large'} />
                  </View>
                }
                _else={<Text text18Bold>Login</Text>}
              />
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View center marginB-10>
        <TouchableOpacity padding-s2>
          <Text text12Medium textColor>
            New to the NFL?
            <Text primary> Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
});