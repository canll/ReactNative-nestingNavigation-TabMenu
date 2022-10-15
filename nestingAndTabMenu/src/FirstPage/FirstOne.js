import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const FirstOne = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>FirstOne</Text>
        </View>
        <Button title='go to firstTwo ' onPress={()=> navigation.navigate('FirstTwo')}/>
    </View>
  )
}

export default FirstOne