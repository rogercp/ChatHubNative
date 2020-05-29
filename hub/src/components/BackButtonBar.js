import React from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
// import { Button as Btt } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

// import { Icon } from 'react-native-elements'
const BackButtonNavBar = (props) => {

    Icon.loadFont();
  return (

<View  style={{position: 'absolute', flexDirection:"row", top: 0,backgroundColor:"lightgrey",width:"100%",height:"9%",marginTop:"9%",padding:"2%"}}>

<Icon
borderRadius={100}
size={50}
raised
name='leftcircleo'
color='#3b5998'
onPress={() => props.navigate('UserHome')}/>





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

export default BackButtonNavBar;

