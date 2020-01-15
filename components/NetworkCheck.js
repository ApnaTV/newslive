import NetInfo from "@react-native-community/netinfo";
import Dialog from "react-native-dialog";
import React from 'react';
import { View } from 'react-native';

export default class NetworkCheck extends React.Component{
    
    // constructor(props){
    //   super(props)
    // }
    state = { isNetworkAvailable : false};
    subscribe = ()=>{
      NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        this.setState({isNetworkAvailable:state.isConnected});
      });
    }
    

    componentDidMount=()=>{
        this.subscribe();
    }
   

    render(){
            return(
                <View>
                <Dialog.Container visible={!this.state.isNetworkAvailable}>
                  <Dialog.Title>Internet Connection!</Dialog.Title>
                  <Dialog.Description>
                   Turn On Internet 
                  </Dialog.Description>
                  </Dialog.Container>
              </View>
            )
        
    }

    
}