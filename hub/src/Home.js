import React,{useSatte} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground} from "react-native";

const HomeScreen = (props) => {








  return (
  
<>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <View style={styles.buttonBox}>
  <Text> Hello </Text>
   </View>
   
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

export default HomeScreen;
