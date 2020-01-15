import React from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'; // Version can be specified in package.json
import { createAppContainer } from 'react-navigation';
import ImageLink from './components/imageLink';
import WebScreen from './components/webScreen';
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
  //  link="https://www.youtube.com/watch?v=Ky-OAhQ-szk"
   link="https://www.youtube.com/embed/live_stream?channel=UCt4t-jeY85JegMlZ-E5UWtA"
   />

       
<ImageLink 
   navigation={this.props.navigation} 
   imageSource="https://i.ytimg.com/vi/Utpa-lKzaD4/hqdefault_live.jpg"
  //  link="https://www.youtube.com/watch?v=Utpa-lKzaD4"
    link="https://www.youtube.com/embed/live_stream?channel=UC9CYT9gSNLevX5ey2_6CK0Q"
   />

       
<ImageLink 
   navigation={this.props.navigation} 
   imageSource="https://images.hindi.news18.com/optimize/7GKOoo1oyZUSkdqQPnirikqS1UA=/0x0/images.hindi.news18.com/ibnkhabar/uploads/459x306/jpg/2019/06/News18-15.jpg"
  //  link="https://www.youtube.com/watch?v=o7qhqJ1ck8g"
  link="https://www.youtube.com/embed/live_stream?channel=UCttspZesZIDEwwpVIgoZtWQ"
   />


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

