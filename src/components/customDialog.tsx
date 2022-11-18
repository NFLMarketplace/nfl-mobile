import React, {useState} from 'react';
import {
  PanningProvider,
  Dialog,
  Text,
  View,
  Button,
  Colors,
} from 'react-native-ui-lib';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import {services} from '../services';
import {AntDesign} from '@expo/vector-icons';
import {stores, Stores} from '../stores';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;

interface CustomDialogProps {
  loader: boolean;
}
export const CustomDialog: React.FC<CustomDialogProps> = ({loader}) => {
  const [visible, setvisible] = useState(true);
  return (
    <Dialog
      visible={loader}
      onDismiss={() => (loader = false)}
      panDirection={PanningProvider.Directions.DOWN}>
      <View
        height={400}
        bg-bgColor
        borderRadius={10}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <AntDesign
          style={{paddingTop: 30}}
          name="checkcircle"
          size={180}
          color="#27AE60"
        />
        <View flex bottom padding-10 paddingB-30>
          <Text text60 center={true}>
            Your Inquiry has been successfully submitted
          </Text>
          <Text padding-10 center={true}>
            You’ll be notified once there’s an update for you.
          </Text>
          <Button
            label={'That’s Great'}
            color={'black'}
            onPress={() => {
              stores.company.handleSuccessModal(false);
              stores.query.handleSuccessModal(false);
              services.nav.goToMain();
              console.log(visible);
            }}
            borderRadius={8}
            style={{height: 48, marginTop: 10, width: elementWidth}}
            backgroundColor={Colors.primary}
          />
        </View>
      </View>
    </Dialog>
  );
};
