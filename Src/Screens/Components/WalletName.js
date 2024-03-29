import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'
import  {Strings}  from '../../Theme/Strings'
import {getDimensionPercentage as dimen} from '../../Utils/Utils'


const WalletName = () => {
  return (
    <View style={styles.main_container}>
      <View>
      <Text>{Strings.English.walletName.youCanlable}</Text>
      <View>

      <Text>{Strings.English.walletName.enterName}</Text>
      </View>

      </View>

    </View>
  )
}

export default WalletName

const styles = StyleSheet.create({
    main_container:{
        backgroundColor:colors.White,
        flex:1,
        marginBottom:dimen(60)
    },

})