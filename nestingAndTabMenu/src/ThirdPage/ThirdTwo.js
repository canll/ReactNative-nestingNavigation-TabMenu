import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const ThirdTwo = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>ThirdTwo</Text>
        </View>
        <Button title='go to ThirdThree ' onPress={()=> navigation.navigate('ThirdThree')}/>
    </View>
  )
}

export default ThirdTwo