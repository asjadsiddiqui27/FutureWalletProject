import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SeperateLine from '../../Common/SeperateLine'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CardRow from '../Send/CardRow'
import { useTheme } from '@react-navigation/native';
import fonts from '../../../Theme/Fonts';

const AddressBookView = (
    {
        text1,
        text2,
        text3,
        text4,
        images
    }
) => {
    const { colors: themeColor, image } = useTheme()
  return (
    <View style={{ height: dimen(150), backgroundColor: themeColor.cardBackground, borderRadius: 12, marginHorizontal: dimen(24) }}>
    <Text style={{ color: themeColor.text,fontSize:20,marginTop:dimen(20),marginLeft:dimen(20),fontFamily:fonts.PoppinsBold }}>ABC</Text>
    <SeperateLine top_line={{marginTop:dimen(10)}}/>
    <CardRow text1={text1} text2={text2}/>
    <CardRow text1={text3} text2={text4} imageData={images}/>
</View>
  )
}

export default AddressBookView

const styles = StyleSheet.create({
    mainView:{

    }
})