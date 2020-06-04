import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,ScrollView,ImageBackground,TextInput} from "react-native";
import Axios from "axios";
import NavBar from '../components/NavBar'
import { GiftedChat } from 'react-native-gifted-chat'
import { Card, ListItem } from 'react-native-elements'
import { Input,Badge } from 'react-native-elements';


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

    <View style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',paddingTop:30}}>
    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>

<Input
containerStyle={{width:"78%"}}
  placeholder='search users'
  />
    <View style={styles.buttonBox}>

  <Button
        title="search"
                    />

</View>
</View>
<Card title="Your Messages" containerStyle={{paddingBottom: 50,height:"83%",width:"100%",top:0}} >
<ScrollView containerStyle={{}}>
     { users.map((u, i) => {
        return (
          <ListItem
          onPress={() => props.navigation.navigate('Message')}
          key={i}
            roundAvatar
            title={u.name}
            avatar={{uri:u.avatar}}
            bottomDivider
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
        marginBottom: 25,
        width: "20%",
        borderRadius: 6,
        backgroundColor:'white'
       },
  text: {
    zIndex:10,
    fontSize: 30,
    color:"#0275d8"
  },  
  input: {
    width:'99%',
    height:40,
      borderColor:'black',
      borderWidth:1
    },
});

export default MessagesList;
