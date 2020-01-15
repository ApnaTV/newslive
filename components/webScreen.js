import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
// import WebView from 'react-native-android-fullscreen-webview-video';

export default class WebSceen extends React.Component {
    static navigationOptions = {
        // title: 'News Live',
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        header: null,
      };
  render() {
    return (
      <WebView source={{ uri: this.props.navigation.state.params.link }} />
    );
  }
}