import {Modal, RadioButton, View} from 'react-native-ui-lib';
import React from 'react';
import {Dimensions, FlatList} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
import {ScreenComponent} from 'rnn-screens';
export type Props = {
  componentId: string;
};
export const FreezoneModal: ScreenComponent<Props> = ({
  componentId,
  show,
  onClosedPressed,
}) => {
  const datalist = [
    'Dubai South',
    'UAQ Free Trade Zone',
    'IFZA',
    'RAK ICC',
    'DMCC',
    'SAIF-Zone',
    'Dubai Airport Freezone',
    'Jazfa - Jebel Ali Free Zone',
    'Dubai Healthcare City',
    'Sharjah Media Zone',
    'Ras Al Khaimah Economic Zone',
    'HAMRIYAH Free Zone Authoriy',
    'Dubai World Trade Center',
    'Khalifa Port Free Zone Authority',
    'Fujairah Free Zone',
    'Ajman Free Zone',
    'Dubai Silicon Oasis',
    'Abu Dhabi Airport Free Zone',
    'Abu Dhabi Global Market',
    'Abu Dhabhi Global Market',
    'TwoFour54',
    'Industrial City of Adub Dhabi',
    'Dubai Internet City',
    'Dubai Academic City',
    'Dubai Biotech Research Park',
    'Dubai Design District',
    'Gold & Diamond Park',
    'Dubai Industrial City',
    'Dubai International FInancial Center',
    'Dubai Knowledge Village',
    'Dubai Media City',
    'Dubai Outsource Zone',
    'Dubai Studio City',
    'Dubai Techno Park',
    'International Media Production Zone',
    'Fujairah Creative City',
  ];
  const renderItem = ({item}) => (
    <View
      marginT-15
      padding-5
      bg-greyDark
      width={elementWidth}
      height={elementHeight}>
      <RadioButton
        marginT-5
        value={null}
        label={item}
        size={15}
        selected={true}
        onPress={() => {
          onClosedPressed();
        }}
      />
    </View>
  );
  return (
    <Modal
      visible={show}
      overlayBackgroundColor={'black'}
      onBackgroundPress={() => console.log('background pressed')}>
      <View flex center marginT-50>
        <View flex left width={elementWidth}>
          <FlatList renderItem={renderItem} data={datalist} />
        </View>
      </View>
    </Modal>
  );
};
