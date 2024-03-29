import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'

const WalletName = () => {
  return (
    <View style={styles.main_container}>
      <Text>WalletName</Text>
    </View>
  )
}

export default WalletName

const styles = StyleSheet.create({
    main_container:{
        backgroundColor:colors.White,
        flex:1
    },
})