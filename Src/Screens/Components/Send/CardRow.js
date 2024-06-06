import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import fonts from '../../../Theme/Fonts';
import colors from '../../../Theme/Colors';
import { useTheme } from '@react-navigation/native';
const CardRow = (
    {
        text1,
        text2,
        imageData
    }
) => {
  const {colors: themeColor, image} = useTheme()
  return (
    <View style={styles.row}>
      <Text style={[styles.text1,{color:themeColor.subText}]}>{text1}</Text>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10}}>
        {
          imageData&& <Image source={imageData} style={{height:dimen(22),width:dimen(22)}}/>
        }
       
      <Text style={[styles.text2,{color:themeColor.text}]}>{text2}</Text>
      </View>
      
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
        fontFamily:fonts.PoppinsBold,
        color:colors.greenText
    }
})