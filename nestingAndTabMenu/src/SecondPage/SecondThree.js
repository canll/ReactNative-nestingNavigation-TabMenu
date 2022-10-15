import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const SecondThree = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>SecondThree</Text>
        </View>
        <Button title='go to SecondTwo ' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

export default SecondThree