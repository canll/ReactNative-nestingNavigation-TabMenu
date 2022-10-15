import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const ThirdOne = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>ThirdOne</Text>
        </View>
        <Button title='go to ThirdTwo ' onPress={()=> navigation.navigate('ThirdTwo')}/>
    </View>
  )
}

export default ThirdOne