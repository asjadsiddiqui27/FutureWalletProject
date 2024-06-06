import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { Image } from 'react-native'
import colors from '../../../Theme/Colors'
import fonts from '../../../Theme/Fonts'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
const CommonSwapRow = (
    {
        label,
        value,
        balanceValue,
        image1,
        image2,
        tokenName,
        onPress,
        longOnPress
    }
) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <View>
            <TouchableOpacity onPress={longOnPress}>

           
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:dimen(17),marginTop:dimen(28)}}>
                <View>
                    <Text style={[styles.label_text,{color:themeColor.subText}]}>{label}</Text>
                    <Text style={[styles.value_text,{color:themeColor.text}]}>{value}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={[styles.balance_text,{color:themeColor.subText}]}>Balance :</Text>
                        <Text style={[styles.balanceValue_text]}>{balanceValue}</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={onPress}>
                <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                    <Image source={image1} style={styles.img}/>
                    <Text style={[styles.value_text,{color:themeColor.text}]}>{tokenName}</Text>

                    <View>
                    <Image source={image2}/>

                    </View>
                </View>
                </TouchableOpacity>
                
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default CommonSwapRow

const styles = StyleSheet.create({
    label_text:{
        fontSize:12,
        fontFamily:fonts.PoppinsBold
    },
    value_text:{
        fontSize:22,
        fontFamily:fonts.PoppinsBold
    },
    balance_text:{
        fontSize:12,
        fontFamily:fonts.PoppinsBold
    },
    balanceValue_text:{
        color:colors.lightBlue,
        fontSize:12,
        fontFamily:fonts.PoppinsBold
    },
    img:{
        height:dimen(37),
        width:dimen(37),
    }
})