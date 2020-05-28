import React, {useEffect} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import IndividualBaordList from '../components/IndividualBoardList'

const Boards = (props) => {


   useEffect(() => {
  
       }, [])

  return (

   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  
    <IndividualBaordList/>

  
   </View>


  )
};

const styles = StyleSheet.create({

});

export default Boards;