import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


const   axiosWithAuth = ()=>  {

    //    retrieveItem =async(key) =>{
        
    //       const value =  await AsyncStorage.getItem(key);
    //       const item = JSON.parse(value);
    //       return item;
        
    //   }
    // retrieveItem('token')
    //  .then(value=>{
          
    //     return axios.create({
    //         headers: {
    //             'Content-Type': 'application/json',
    //              Authorization: `Token ${value}`
    //         },
    //       });

    //      }
     

    //  )

    AsyncStorage.getItem('token').then((response)=>{
        console.log(response,"response")
        const item = JSON.parse(response)
        return item 
        // return axios.create({
        //      headers: {
        //        'Content-Type': 'application/json',
        //     Authorization: `Token ${item}`
        //       },
        //   });

  })


    
    

}

export default axiosWithAuth 