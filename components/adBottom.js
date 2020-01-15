import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob'
export default class AdBottom extends React.Component {
  render() {
    return (
        <View  style={{  position:'absolute', bottom:0 }}>
       <AdMobBanner
       bannerSize="smartBannerPortrait"
       adUnitID="ca-app-pub-3940256099942544/6300978111"  //this is sample test id ,change this
     />
       </View>
    );
  }
}