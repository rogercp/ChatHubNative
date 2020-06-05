import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,FlatList,Dimensions,TextInput} from "react-native";
import Axios from "axios";
import { Input,Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage';

const EditIndiviualBoardList = (props) => {

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

  return (

<>               

<Input
  placeholder='Change list Name'
/>


  
</>
  
  )
};

const styles = StyleSheet.create({
    icon:{
        marginTop:"9%",
        padding:"2%"
    },
    input: {
        width:'70%',
        height:40,
          margin:15,
          borderColor:'black',
          borderWidth:1
        },
        buttonBox:{
            marginBottom: 25,
            width: "20%",
            borderRadius: 6,
            backgroundColor:'white'
           },
});

export default EditIndiviualBoardList;