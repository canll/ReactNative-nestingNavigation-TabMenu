import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const SecondTwo = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>SecondTwo</Text>
        </View>
        <Button title='go to SecondThree ' onPress={()=> navigation.navigate('SecondThree')}/>
    </View>
  )
}

export default SecondTwo