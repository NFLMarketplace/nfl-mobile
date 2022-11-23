import React from 'react';
import {
  View,
  Text,
  ConnectionStatusBar,
  TouchableOpacity,
} from 'react-native-ui-lib';
import Ionicons from '@expo/vector-icons/Ionicons';
import {ScreenComponent} from 'rnn-screens';
import {Row} from './row';

interface MainHeaderProps {
  title?: string;
  leftIcon?: any;
  leftIconAction?: () => void;
  rightIcon?: any;
  rightIconAction?: () => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  leftIconAction,
  rightIconAction,
}) => {
  return (
    <Row padding-10 spread bg-bgColor>
      <View width={'20%'} left>
        {leftIcon && (
          <TouchableOpacity absL onPress={leftIconAction}>
            <Ionicons name={leftIcon} size={30} />
          </TouchableOpacity>
        )}
      </View>
      <View width={'60%'} center>
        <Text textColor text18Bold>
          {title}
        </Text>
      </View>
      <View width={'20%'} right>
        {rightIcon && (
          <TouchableOpacity absR onPress={rightIconAction}>
            <Ionicons name={rightIcon} size={20} />
          </TouchableOpacity>
        )}
      </View>
    </Row>
  );
};
