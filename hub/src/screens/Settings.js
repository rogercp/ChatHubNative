import React, {useEffect,useState} from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
import Axios from "axios";
import NavBar from '../components/NavBar'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';


const Settings = (props) => {

    Icon.loadFont();


    const [userInfo,setUserInfo]= useState({
        username:'',
  
      })
  
      


   useEffect(() => {
  




    AsyncStorage.getItem('username').then((response)=>{
        const item = JSON.parse(response)
        console.log(item,"item in create board")
        setUserInfo({...userInfo,username:item})
    }
    )
    
       }, [])
       const logout = () =>{
        AsyncStorage.removeItem('token');
        props.navigation.navigate('Home');
       }

  return (
<>

<View style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',paddingTop:10}}>
<Icon
style={styles.icon}
borderRadius={100}
size={40}
raised
name='logout'
color='#3b5998'
onPress={logout}/>

<View 
>

<Avatar
size='xlarge'
rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  }}
  onAccessoryPress={()=>console.log("pressed accessory")}
  showAccessory
/>
</View>
<Text style={styles.text}>{userInfo.username}</Text>
   </View>
   <NavBar navigate={props.navigation.navigate}   props={props}/>

</>
  )
};


const styles = StyleSheet.create({
    icon:{
        top:0,
        right:0,
        marginTop:"9%",
        padding:"2%",
        alignSelf:"flex-end"
    },
    buttonBox:{
      width: "25%",
      backgroundColor:'white'
     },
    text: {
      padding:20
    }
  });



export default Settings;