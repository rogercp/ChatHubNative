import React from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
// import { Button as Btt } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

// import { Icon } from 'react-native-elements'
const NavBar = (props) => {

    Icon.loadFont();
  return (

<View  style={{position: 'absolute', flexDirection:"row", bottom: 0, justifyContent: 'space-evenly', alignItems: 'center',backgroundColor:"lightgrey",width:"100%",height:"11%"}}>

<Icon
borderRadius={100}
size={50}
  raised
  name='home'
  color='#3b5998'
  onPress={() => props.navigate('UserHome')}/>


<Icon
borderRadius={100}
 size={50}
  raised
  name='search1'
  color='#3b5998'
  onPress={() => props.navigate('Search')}/>
<Icon
borderRadius={100}
size={50}
  raised
  name='message1'
  color='#3b5998'
  onPress={() => props.navigate('Messages')}/>

<Icon
borderRadius={100}
size={50}
  raised
  name='user'
  color='#3b5998'
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

