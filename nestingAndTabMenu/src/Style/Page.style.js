import { StyleSheet,Dimensions } from 'react-native';
 
export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:Dimensions.get('window').height/1.2,
    },
    text:{
        fontWeight:'bold',
        fontSize:30,
    }

})