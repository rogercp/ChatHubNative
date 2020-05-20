import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground} from "react-native";


const UserHome = (props) => {

    const [userInfo,setUserInfo]= useState({

    })


   useEffect(() => {
    // initUser()  
       }, [])

       
    
       
        // const initUser = ()=>{
        //     AxiosWithAuth().get('http://192.168.68.103:8000/user/init/')
        //     .then(res => {
        //         console.log('init', res)
        //         console.log(res.data)
                
        //         })
        //         .catch(err => {
                
        //             console.log(err)
        //         });
            
            
        // }

       

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
