import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import fonts from '../../../Theme/Fonts';
import colors from '../../../Theme/Colors';
const CardRow = (
    {
        text1,
        text2,
    }
) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  )
}

export default CardRow

const styles = StyleSheet.create({
    row:{
       justifyContent:"space-between" ,
       flexDirection:"row",
       marginHorizontal:dimen(16),
       marginTop:dimen(20)
    },
    text1:{
        fontSize:dimen(14),
        fontFamily:fonts.PoppinsBold,
        color:colors.Black
    },
    text2:{
        fontSize:dimen(14),
        fontFamily:fonts.PoppinsMedium,
        color:colors.greenText
    }
})