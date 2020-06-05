import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground,FlatList,Dimensions,ScrollView} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import IndividualBaordList from '../components/IndividualBoardList'
import BackButtonBar from '../components/BackButtonBar'
import Icon from 'react-native-vector-icons/AntDesign'
import { Overlay } from 'react-native-elements';
import CreateListsInsideBoardOverlay from '../components/CreateListsInsideBoardOverlay'

const Boards = (props) => {

    const [data1,setData1] = useState([1,2,3])
   useEffect(() => {
  
       }, [])
       const [visible, setVisible] = useState(false);

       const toggleOverlay = () => {
        setVisible(!visible);
      };
  
  return (

<>               
              
<View  style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
<Icon
style={styles.icon}
borderRadius={100}
size={40}
raised
name='leftcircleo'
color='#3b5998'
onPress={() => props.navigation.navigate('UserHome')}/>

<Icon
style={styles.icon}
borderRadius={100}
size={40}
raised
name='bars'
color='#3b5998'
onPress={toggleOverlay} />
    


<Overlay overlayStyle={{width:"90%",height:"80%",backgroundColor:"lightgrey"}} isVisible={visible}   onBackdropPress={toggleOverlay}>
<ScrollView containerStyle={{}}>

<CreateListsInsideBoardOverlay/>

</ScrollView>

</Overlay>


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