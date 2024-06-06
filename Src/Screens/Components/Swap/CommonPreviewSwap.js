import { Image, StyleSheet, Text, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React from 'react'
import { useTheme } from '@react-navigation/native';
import fonts from '../../../Theme/Fonts';

const CommonPreviewSwap = (
{
    imageData,
    text1,
    text2
}
) => {
    const { colors: themeColor, image } = useTheme()
  return (
    <View style={{justifyContent:"center",
    alignItems:'center'}}>
     <Image source={imageData} style={styles.img}/>
     <Text style={[styles.text1,{color:themeColor.text}]}>{text1}</Text>
     <Text style={[styles.text2,{color:themeColor.subText}]}>{text2}</Text>
    </View>
  )
}

export default CommonPreviewSwap

const styles = StyleSheet.create({
    img:{
        height:dimen(44),
        width:dimen(44)
    },
    text1:{
        fontSize:20,
        fontFamily:fonts.PoppinsBold,
      
    },
    text2:{
        fontSize:12,
        fontFamily:fonts.PoppinsMedium,
        
    }
})