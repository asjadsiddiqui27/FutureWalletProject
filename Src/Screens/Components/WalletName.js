import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'
import  {Strings}  from '../../Theme/Strings'


const WalletName = () => {
  return (
    <View style={styles.main_container}>
      <Text>{Strings.English.walletName.youCanlable}</Text>
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