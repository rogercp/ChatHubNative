import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,ScrollView} from "react-native";
// import axiosWithAuth from '../helpers/AxiosWithAuth'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import NavBar from '../components/NavBar'
import Boards from './Boards'
import { Card, ListItem } from 'react-native-elements'


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


const UserHome = (props) => {

    const [userInfo,setUserInfo]= useState({
      username:'',

    })


   useEffect(() => {
    initUser()  

    //  console.log(axiosWithAuth(),'isndied userhome')
    
    
       }, [])

       
     
        const initUser = ()=>{

            AsyncStorage.getItem('token').then((response)=>{
                const item = JSON.parse(response)
                console.log(item,"item")
            axios
             .get('http://127.0.0.1:8000/user/init/',{
                headers: {
                 'Content-Type': 'application/json',
                 Authorization: `Token ${item}`
                    
               }})
              .then(res => {
                  

                setValueName = async () => {
                  try {
                  await AsyncStorage.setItem('username', JSON.stringify(`${res.data.name}`))
                  } catch (e) {
                  // saving error
                  }
              }
              setValueName()

              setValueUUID = async () => {
                try {
                await AsyncStorage.setItem('id', JSON.stringify(`${res.data.uuid}`))
                } catch (e) {
                // saving error
                }
            }
            setValueUUID()

            setUserInfo({...userInfo,username:res.data.name})

                    console.log(res.data,"responmse from init")
                                  
                   
              }).catch(error=>
                  {

                    console.log(error)
                  }
              )
          }) 
    }
       


    const users = [
      {
         name: 'brynn',
         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
   },
   {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
  name: 'brynn',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
  name: 'brynn',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
 name: 'brynn',
 avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
{
name: 'brynn',
avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
     ]
     

  return (
<>

   <View style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  
<Card title="Your Boards" containerStyle={{paddingBottom: 30,width:"100%",height:"89%",top:0}} >
<ScrollView>
   { users.map((u, i) => {
      return (
        <ListItem
        onPress={()=>props.navigation.navigate('Boards')}
          key={i}
          roundAvatar
          title={u.name}
          avatar={{uri:u.avatar}}
        />
      );
    })
  }
  </ScrollView>
  
</Card>
 

   </View>

   <NavBar navigate={props.navigation.navigate}  props={props}/>


</>
  )
};

const styles = StyleSheet.create({
buttonBox:{
  marginBottom: 10,
  width: "40%",
  borderRadius: 6,
  backgroundColor:'white'
 },
  text: {
    zIndex:10,
    fontSize: 30,
    color:"#0275d8"
  }
});

export default UserHome;
