import React, {useEffect} from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
import Axios from "axios";
import NavBar from '../components/NavBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage';


const Settings = (props) => {

    Icon.loadFont();
   useEffect(() => {
   

       }, [])

       const logout = () =>{
        AsyncStorage.removeItem('token');
        props.navigation.navigate('Home');
       }

  return (
<>

   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <View>

   <Icon
   borderRadius={100}
    size={50}
     raised
     name="ios-person"
     color='blue'

   onPress={logout}/>

   </View>
 
   
       
        <NavBar navigate={props.navigation.navigate}   props={props}/>

        


   <Text>Settings</Text>
   



   </View>

</>
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



export default Settings;