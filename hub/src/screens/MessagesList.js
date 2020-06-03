import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,ScrollView,ImageBackground} from "react-native";
import Axios from "axios";
import NavBar from '../components/NavBar'
import { GiftedChat } from 'react-native-gifted-chat'
import { Card, ListItem } from 'react-native-elements'


const MessagesList = (props) => {


   useEffect(() => {
    
    

       }, [])


     
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
       ]

  return (



<>

    <View style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  <Card title="Messages" containerStyle={{paddingBottom: 30,width:"100%",height:"89%",top:0}} >
  <ScrollView>
     { users.map((u, i) => {
        return (
          <ListItem
          onPress={() => props.navigation.navigate('Message')}
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
  
     <NavBar navigate={props.navigation.navigate}   props={props}/>
  
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

export default MessagesList;
