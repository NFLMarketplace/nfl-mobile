import {Dimensions} from 'react-native';
import {Assets} from 'react-native-ui-lib';

export const useConstants = () => {
  const dim = Dimensions.get('screen');

  return {
    dim,
  };
};

export function readAllAssets(): void {
  Assets.loadAssetsGroup('icons', {
    logo: require('../../assets/images/logo_top.png'),
  });
}
