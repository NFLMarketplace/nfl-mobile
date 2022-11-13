import React from 'react';
import {ScrollView, Dimensions, StyleSheet, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ScreenComponent} from 'rnn-screens';
import {
  Colors,
  Text,
  View,
  TouchableOpacity,
  Badge,
  Chip,
} from 'react-native-ui-lib';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

export type Props = {
  componentId: string;
};
export const Inbox: ScreenComponent<Props> = ({componentId}) => {
  const datalist = [
    {Invoice: 'NFL-06122-001', noofSMS: '3'},
    {Invoice: 'NFL-06122-004', noofSMS: '5'},
  ];

  const renderItem = ({item}) => (
    <View
      marginT-15
      padding-5
      bg-greyDark
      style={{borderRadius: 10}}
      width={elementWidth}
      height={70}>
      <View flex row style={{justifyContent: 'space-between'}}>
        <Text style={{padding: 10}} text18Bold>
          {item.Invoice}
        </Text>
        <TouchableOpacity
          paddingL-15
          paddingT-5
          style={{
            backgroundColor: '#219653',
            height: 30,
            width: 80,
            borderRadius: 10,
          }}>
          <Text style={{textAlignment: 'center'}}>Active</Text>
        </TouchableOpacity>
      </View>
      <Text text12Medium>{item.noofSMS} new quotations received</Text>
    </View>
  );
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View flex center>
          <View flex row width={elementWidth} height={elementHeight} marginT-10>
            <View flex row marginT-10>
              <Chip
                margin-5
                label={'Inquiry'}
                labelStyle={{color: '#828282'}}
                onPress={() => console.log('pressed')}
              />
              <Chip
                margin-5
                label={'Quotation'}
                labelStyle={{color: '#828282'}}
                backgroundColor={'#F2C94C'}
                onPress={() => console.log('pressed')}
              />
              <Chip
                margin-5
                labelStyle={{color: '#828282'}}
                label={'Messages'}
                onPress={() => console.log('pressed')}
              />

              <TouchableOpacity
                flex
                right
                style={{justifyContent: 'flex-end', alignItem: 'flex-end'}}>
                <View>
                  <Ionicons name="filter" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal={true} style={{width: elementWidth}}>
            <FlatList renderItem={renderItem} data={datalist} />
          </ScrollView>
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
