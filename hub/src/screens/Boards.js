import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,FlatList,Dimensions} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import IndividualBaordList from '../components/IndividualBoardList'
import BackButtonBar from '../components/BackButtonBar'
import Icon from 'react-native-vector-icons/AntDesign'

const Boards = (props) => {

    const [data1,setData1] = useState([1,2,3])
   useEffect(() => {
  
       }, [])




      

  return (

<>               
              
<View >
<Icon
style={styles.icon}
borderRadius={100}
size={50}
raised
name='leftcircleo'
color='#3b5998'
onPress={() => props.navigation.navigate('UserHome')}/>

</View>

  <FlatList
     horizontal 
    keyExtractor={(item)=> item.name}
   showsHorizontalScrollIndicator={false}
      data={data1}
      renderItem={({item}) => {
            return (
                <View style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height}}>
                <IndividualBaordList item={item}  />
                </View>

            );
      }}
      />
  
</>
  



  )
};

const styles = StyleSheet.create({
    icon:{
        marginTop:"9%",
        padding:"2%"
    
    },
});

export default Boards;