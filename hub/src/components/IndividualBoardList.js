import React, {useEffect,useState} from "react";
import { View, Text, StyleSheet,Dimensions,ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import EditIndiviualBoardList from '../components/EditIndiviualBoardList'
import { Overlay } from 'react-native-elements';


const IndividualBaordList = (props) => {

    Icon.loadFont();
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
     setVisible(!visible);
   };


   useEffect(() => {
  
       }, [])

  return (

    
<ScrollView >
  <Card style={{}}>
      <View style={{width:"100%",height:"5%",flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>


    <Text style={{fontSize:20}}>Card</Text>

    <Icon
    borderRadius={100}
    size={50}
    raised
    name='ellipsis1'
    color='#3b5998'
    onPress={toggleOverlay} 
  />

<Overlay overlayStyle={{width:"90%",height:"80%",backgroundColor:"lightgrey"}} isVisible={visible}   onBackdropPress={toggleOverlay}>
<ScrollView containerStyle={{}}>

<EditIndiviualBoardList/>

</ScrollView>

</Overlay>


      </View>
      <View style={{paddingBottom:100}}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
    <Text>{props.item}</Text>
    <Text>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
  </Text>
  <Button

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
    </View>
</Card>

  
</ScrollView>


  )
};

const styles = StyleSheet.create({

});

export default IndividualBaordList;