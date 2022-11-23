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

class Tab2 extends Component {
  state = {};
  render() {
    return (
      <View flex center padding-20 bg-bgColor>
        <Text textColor text18Bold>
          Comming Soon
        </Text>
      </View>
    );
  }
}

export {Tab2};
