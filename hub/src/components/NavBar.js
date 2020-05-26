import React from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
// import { Button as Btt } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { Icon } from 'react-native-elements'
const NavBar = (props) => {

    Icon.loadFont();
  return (

<View  style={{position: 'absolute', flexDirection:"row", bottom: 0, justifyContent: 'space-evenly', alignItems: 'center',backgroundColor:"lightgrey",width:"100%",height:"11%"}}>

<Icon
borderRadius={100}
backgroundColor="#3b5998"
size={50}
  raised
  name='home'
  color='white'
  onPress={() => props.navigate('UserHome')}/>


<Icon
borderRadius={100}
backgroundColor="#3b5998"
 size={50}
  raised
  name='search'
  color='white'
  onPress={() => props.navigate('Search')}/>
<Icon
borderRadius={100}
backgroundColor="#3b5998"
size={50}
  raised
  name='chat'
  color='white'
  onPress={() => props.navigate('Messages')}/>

<Icon
borderRadius={100}
backgroundColor="#3b5998"
size={50}
  raised
  name='settings'
  color='white'
  onPress={() => props.navigate('Settings')}/>






  </View>
  )
};

const styles = StyleSheet.create({
    buttonBox:{
      width: "25%",
      backgroundColor:'white'
     },
    text: {
      marginHorizontal:50
    }
  });

export default NavBar;

