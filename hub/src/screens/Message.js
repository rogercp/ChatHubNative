import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,ScrollView,ImageBackground} from "react-native";
import Axios from "axios";
import NavBar from '../components/NavBar'
import { GiftedChat } from 'react-native-gifted-chat'
// import BackButtonBar from '../components/BackButtonBar'
import Icon from 'react-native-vector-icons/AntDesign'

const Message = (props) => {

const [messages,setMessages] = useState({

    messages:[]
})

   useEffect(() => {
    setMessages({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      })
    
       }, [])


     function onSend (messages = []){
        setMessages(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

  return (

<>
{/* <ScrollView > */}
{/* <BackButtonBar navigate={props.navigation.navigate}   props={props}/> */}

<View >
<Icon
style={styles.icon}
borderRadius={100}
size={50}
raised
name='leftcircleo'
color='#3b5998'
onPress={() => props.navigation.navigate('MessagesList')}/>

</View>

   <GiftedChat
        messages={messages.messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />

{/* </ScrollView> */}
</>

    


  )
};

const styles = StyleSheet.create({
icon:{
    marginTop:"9%",
    padding:"2%"

},
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

export default Message;
