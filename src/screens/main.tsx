import React from 'react';
import {ImageBackground} from 'react-native';
import {Text, View, GridList, Spacings} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import {observer} from 'mobx-react';

import {MainHeader} from '../components';


type GridDataType = {
    id: number,
    title: string,
    bgImgUrl:string
  }

export const Main: ScreenComponent = observer(({componentId}) => {

  const gridData: GridDataType[]=[
  {
      id:0,
      title:'Make Enquiry',
      bgImgUrl: "https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/Make-Inquiry.jpg"
    },
  {
      id:1,
      title:'PRO Services',
      bgImgUrl: "https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/PRO-Services.jpg"
    },
  {
      id:2,
      title:'B2B Services',
      bgImgUrl: "https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/B2B-Services.jpg"
    },
  {
      id:3,
      title:'Company Formation',
      bgImgUrl: "https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/B2B-Services.jpg"
    },
{
    id:4,
    title:'B2C Services',
    bgImgUrl: "https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/B2C-Services.jpg"
 },

  {
      id:5,
      title:'WPS Services',
      bgImgUrl: "https://nfl-api.techgebagency.website/wp-content/uploads/2022/10/WPS-Services.jpg"
    }
  ]


  const _renderItem = ({item
  })=>(<ImageBackground resizeMode='stretch' style={{height:200}}  source={{uri: item.bgImgUrl}}><View><Text>{item.title}asds</Text></View></ImageBackground>)
  


  return (
    <View flex bg-bgColor>
      <MainHeader title={'NFL Marketplace'} rightIcon={'md-notifications'} />
      <GridList
        data={gridData}
        renderItem={_renderItem}
        numColumns={2}
        maxItemWidth={200}
        itemSpacing={Spacings.s3}
        listPadding={Spacings.s5}
      />
    </View>
  );
});
