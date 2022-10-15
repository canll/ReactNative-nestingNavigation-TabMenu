import React from 'react'
import { View,Button,Text } from 'react-native'
import styles from "../Style/Page.style";
const FirstTwo = ({navigation}) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.text}>FirstTwo</Text>
        </View>
        <Button title='go to firstThree ' onPress={()=> navigation.navigate('FirstThree')}/>
    </View>
  )
}

export default FirstTwo