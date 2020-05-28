import React, {useEffect} from "react";
import { View, Text, Image, StyleSheet,Button,View } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const IndividualBaordList = (props) => {


   useEffect(() => {
  
       }, [])

  return (

   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  
  <Card
  title='HELLO WORLD'
  
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

  
   </View>


  )
};

const styles = StyleSheet.create({

});

export default IndividualBaordList;