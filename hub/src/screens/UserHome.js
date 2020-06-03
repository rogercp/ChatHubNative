import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,ScrollView} from "react-native";
// import axiosWithAuth from '../helpers/AxiosWithAuth'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import NavBar from '../components/NavBar'
import Boards from './Boards'
import { Card, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Overlay } from 'react-native-elements';
import CreateBoard from '../components/CreateBoard'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


const UserHome = (props) => {

  Icon.loadFont();

    const [userInfo,setUserInfo]= useState({
      username:'',

    })
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };

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
       
    const randomRgb = () =>{

      const red = Math.floor(Math.random()*256)
      const green = Math.floor(Math.random()*256)
      const blue = Math.floor(Math.random()*256)
  
      return `rgb(${red},${green},${blue})`
  }



    const users = [
      {
         name: 'brynn',
         avatar: randomRgb()
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
avatar: randomRgb()
},
     ]
     

     
  return (
<>

   <View style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <Icon
    borderRadius={100}
    size={60}
    raised
    name='add'
    color='#3b5998'
    onPress={toggleOverlay} 
    />


<Overlay overlayStyle={{width:"80%"}} isVisible={visible}   onBackdropPress={toggleOverlay}>
<CreateBoard/>
</Overlay>



<Card title="Your Boards" containerStyle={{paddingBottom: 50,height:"84%",width:"100%",top:0}} >
<ScrollView containerStyle={{}}>
   { users.map((u, i) => {
      return (
        
        <ListItem
        onPress={()=>props.navigation.navigate('Boards')}
          key={i}
          roundAvatar
          title={u.name}
          leftAvatar={
            <View style={{height:40,width:40,backgroundColor:randomRgb()}} />
          }
           bottomDivider
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
