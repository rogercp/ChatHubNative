import React,{useState,useEffect} from "react";
import { Text, StyleSheet, ScrollView, View,Button, TouchableOpacity,TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-community/async-storage';



const Register = (props) => {
    
    const [userInfo,setUserInfo] = useState({

        email:'',
        username:'',
        password1:'',
        password2:''
        
        })
    

        const register = () =>{
            fetch('http://127.0.0.1:8000/user/registration', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userInfo),
            });
            }
            


    return (
        <KeyboardAwareScrollView contentContainerStyle={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"lightgrey"}}>

        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"lightgrey"}}>

        <Text style={{fontSize:30}}>Register</Text>
        <TextInput 
        keyboardAppearance="dark"
        name = 'email'
        returnKeyType='next'
        placeholder='email'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.email}
        onChangeText={(newValue)=>setUserInfo({...userInfo,email:newValue})}
        />
        <Text> {userInfo.email}</Text>

        <TextInput
                        keyboardAppearance="dark"
 
        name = 'username'
        placeholder='username'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.username}
        onChangeText={(newValue)=>setUserInfo({...userInfo,username:newValue})}
        />
        <Text> {userInfo.username}</Text>

        <TextInput 
        keyboardAppearance="dark"
        name = 'password1'
        placeholder='password'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.password1}
        onChangeText={(newValue)=>setUserInfo({...userInfo,password1:newValue})}
        />
        <Text> {userInfo.password1}</Text>

        <TextInput 
        keyboardAppearance="dark"
        name = 'password2'
        placeholder='validate password'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.password2}
        onChangeText={(newValue)=>setUserInfo({...userInfo,password2:newValue})}
        />
        <Text> {userInfo.password2}</Text>

        <View style={styles.buttonBox}>
       <Button
           onPress={register}
           style={styles.button}
               
               title="Enter"
           />
       </View>
        
      </View>
        </KeyboardAwareScrollView>
      
      
    )
  };
  
  const styles = StyleSheet.create({
    input: {
    width:'80%',
    height:40,
      margin:15,
      borderColor:'black',
      borderWidth:1
    },
    buttonBox:{
        marginBottom: 10,
        width: "40%",
        borderRadius: 6,
        backgroundColor:'white'
       },
});


export default Register;