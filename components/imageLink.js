import React from 'react';
import { TouchableOpacity,Image,StyleSheet,Dimensions, View} from 'react-native';
export default class ImageLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    };
    this.onLayout = this.onLayout.bind(this);
  }

  directToLink = ()=>{
    this.props.navigation.navigate('WebScreen',{link:this.props.link});
  }

  onLayout= (e)=> {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
  
  render() {

      if(this.state.width<this.state.height){
        return(
          // <View 
          //   style={{
          //     width: this.state.width,
          //     height: this.state.height*0.30,
          //   }}
          // >
            <TouchableOpacity onPress={this.directToLink} onLayout={this.onLayout}>
            
            <Image
                resizeMode='stretch' style={{
                  width: this.state.width,
                  height: this.state.height*0.30,
                }}
                source={{ uri: this.props.imageSource}}
              />
            </TouchableOpacity>
          // </View>
          
          );
      }

      else{
        return(
          // <View 
          //   style={{
          //     width: this.state.width,
          //     height: this.state.height,
          //   }}
          // >
            <TouchableOpacity onPress={this.directToLink} onLayout={this.onLayout}>
            
            <Image
                resizeMode='stretch' style={{
                  width: this.state.width,
                  height: this.state.height,
                }}
                source={{ uri: this.props.imageSource}}
              />
            </TouchableOpacity>
          // </View>
          
          );
      }

      // return(
      //   // <View 
      //   //   onLayout={this.onLayout}
      //   //   style={{
      //   //             width: this.state.width,
      //   //             height: this.state.height,
      //   //           }}
      //   // >
      //     <TouchableOpacity onPress={this.directToLink}>
          
      //     <Image
      //         resizeMode='stretch' style={styles.image}
      //         source={{ uri: this.props.imageSource}}
      //       />
      //     </TouchableOpacity>
      //   // </View>
        
      //   );
      
  }
}

const { width,height } = Dimensions.get('window');
const styles = StyleSheet.create({
    image: {
      width: width ,
      height: height*0.30
    }
  });


