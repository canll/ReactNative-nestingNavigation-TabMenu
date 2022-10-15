import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const SecondOne = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>SecondOne</Text>
        </View>
        <Button title='go to SecondTwo ' onPress={()=> navigation.navigate('SecondTwo')}/>
    </View>
  )
}

export default SecondOne