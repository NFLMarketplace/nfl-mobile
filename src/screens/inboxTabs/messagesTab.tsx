import React, {Component} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {screens} from '..';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.12;
const logoHeight = screenHeight / 11;

class Tab3 extends Component {
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

export {Tab3};
