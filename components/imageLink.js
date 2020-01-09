import React from 'react';
import { TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
export default class ImageLink extends React.Component {

  directToLink = ()=>{
    this.props.navigation.navigate('WebScreen',{link:this.props.link});
  }  
  render() {
      return(
      <TouchableOpacity onPress={this.directToLink}>
       
       <Image
          resizeMode='stretch' style={styles.image}
          source={{ uri: this.props.imageSource}}
        />
      </TouchableOpacity>
      
      );
  }
}

const { width,height } = Dimensions.get('window');
const styles = StyleSheet.create({
    image: {
      width: width ,
      height: height*0.30
    }
  });


