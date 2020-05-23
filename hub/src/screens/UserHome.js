import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground} from "react-native";
// import axiosWithAuth from '../helpers/AxiosWithAuth'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";



const UserHome = (props) => {

    const [userInfo,setUserInfo]= useState({

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



                    console.log(res.data,"responmse from init")
                                  
                   
              }).catch(error=>
                  {

                    console.log(error)
                  }
              )
                
          })
        
            







            // axiosWithAuth().get('http://127.0.0.1:8000/user/init')
            // .then(res => {
            //     console.log('init', res)
            //     console.log(res.data)
                
            //     })
            //     .catch(err => {
                
            //         console.log(err)
            //     });
            
            
        
    }
       

  return (
<>

   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <Text>Hello im in user home</Text>
   
   </View>

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
