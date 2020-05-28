import React, {useEffect} from "react";
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const IndividualBaordList = (props) => {


   useEffect(() => {
  
       }, [])

  return (

   
  <Card
  title='HELLO WORLD'
  containerStyle={{ }}
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
    <Text>{props.item}</Text>
  </Text>
  <Button

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

  
 


  )
};

const styles = StyleSheet.create({

});

export default IndividualBaordList;