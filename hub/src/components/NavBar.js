import React from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
// import { Button as Btt } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { Icon } from 'react-native-elements'
const NavBar = (props) => {

    Icon.loadFont();
  return (

<View  style={{position: 'absolute', flexDirection:"row", bottom: 0, justifyContent: 'space-evenly', alignItems: 'center',backgroundColor:"lightgrey",width:"100%",height:"12%"}}>


<Icon
size={50}
  raised
  name='home'
  color='#003d99'
  onPress={() => props.navigate('UserHome')}/>

<Icon
 size={50}
  raised
  name='search'
  color='#003d99'
  onPress={() => props.navigate('Search')}/>
<Icon
size={50}
  raised
  name='chat'
  color='#003d99'
  onPress={() => props.navigate('Messages')}/>

<Icon
size={50}
  raised
  name='settings'
  color='#003d99'
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

