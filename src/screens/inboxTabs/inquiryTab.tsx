import React, {Component} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {screens} from '..';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;
const datalist = [
  {Invoice: 'NFL-06122-001', noofSMS: '3'},
  {Invoice: 'NFL-06122-004', noofSMS: '5'},
];
const renderFirstPage = () => {
  return;
};
const renderSecondPage = () => {};
const renderThirdPage = () => {};
const renderItem = ({item}) => (
  <TouchableOpacity
    onPress={() => {
      screens.show('QuotationForm');
    }}>
    <View
      marginT-15
      padding-5
      bg-greyDark
      style={{borderRadius: 10}}
      width={elementWidth}
      height={70}>
      <View flex row style={{justifyContent: 'space-between'}}>
        <Text textColor style={{padding: 10}} text18Bold>
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
          <Text textColor style={{textAlignment: 'center'}}>
            Active
          </Text>
        </TouchableOpacity>
      </View>
      <Text textColor text12Medium>
        {item.noofSMS} new quotations received
      </Text>
    </View>
  </TouchableOpacity>
);
class Tab1 extends Component {
  state = {};
  render() {
    return (
      <View flex padding-20 bg-bgColor>
        <FlatList data={datalist} renderItem={renderItem}></FlatList>
      </View>
    );
  }
}

export {Tab1};
