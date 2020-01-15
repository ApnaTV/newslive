import React from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'; // Version can be specified in package.json
import { createAppContainer } from 'react-navigation';
import ImageLink from './components/imageLink';
import WebScreen from './components/webScreen';
// import AdBottom from './components/adBottom';
class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'News Live',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
      return(
      <ScrollView>
       
   <ImageLink 
   navigation={this.props.navigation} 
   imageSource="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png"
   link="https://www.youtube.com/watch?v=Ky-OAhQ-szk"
   />

       
<ImageLink 
   navigation={this.props.navigation} 
   imageSource="https://i.ytimg.com/vi/Utpa-lKzaD4/hqdefault_live.jpg"
   link="https://www.youtube.com/watch?v=Utpa-lKzaD4"
   />

       
<ImageLink 
   navigation={this.props.navigation} 
   imageSource="https://images.hindi.news18.com/optimize/7GKOoo1oyZUSkdqQPnirikqS1UA=/0x0/images.hindi.news18.com/ibnkhabar/uploads/459x306/jpg/2019/06/News18-15.jpg"
   link="https://www.youtube.com/watch?v=o7qhqJ1ck8g"
   />

{/* <AdBottom/> */}

      </ScrollView>
      
      );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    WebScreen:{
      screen:WebScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;

