import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const FirstThree = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>FirstThree</Text>
        </View>
        <Button title='go to firstTwo ' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

export default FirstThree