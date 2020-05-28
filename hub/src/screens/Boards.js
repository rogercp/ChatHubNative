import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,FlatList,Dimensions} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import IndividualBaordList from '../components/IndividualBoardList'
import BackButtonBar from '../components/BackButtonBar'

const Boards = (props) => {

    const [data1,setData1] = useState([1,2,3])
   useEffect(() => {
  
       }, [])

  return (

    <>
  <BackButtonBar/>
  
  <FlatList
     horizontal 
    keyExtractor={(item)=> item.name}
   showsHorizontalScrollIndicator={false}
      data={data1}
      renderItem={({item}) => {
            return (
                <View style={{paddingTop:"25%",width: Dimensions.get('window').width,height: Dimensions.get('window').height}}>
                <IndividualBaordList item={item}/>
                </View>

            );
      }}
      />
  
</>
  



  )
};

const styles = StyleSheet.create({

});

export default Boards;