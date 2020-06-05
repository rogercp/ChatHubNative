import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,FlatList,Dimensions,TextInput} from "react-native";
import Axios from "axios";
import { Input,Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage';


const CreateListsInsideBoardOverlay = (props) => {

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
  placeholder='Add List'
/>


<Text style={{ textAlign: 'center',}}>Add Users to Board</Text>

<View style={{display:"flex",justifyContent:"center",alignItems:"center" }} >
<Badge value= {userInfo.username} status="primary" />

</View>

<View style={{flexDirection:"row",justifyContent:"space-evenly"}}>

<Input
containerStyle={{width:"80%"}}
  placeholder='search users'
  />
    <View style={styles.buttonBox}>

  <Button
        title="search"
                    />



</View>


</View>

<View style={{alignSelf:"center", width: "60%",borderRadius: 6,backgroundColor:'white',marginTop:20}}>
                <Button
                    style={styles.button}
                        title="Enter"
                    />

</View>
  
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

export default CreateListsInsideBoardOverlay;