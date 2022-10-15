import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const ThirdThree = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>ThirdThree</Text>
        </View>
        <Button title='go to ThirdTwo ' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

export default ThirdThree