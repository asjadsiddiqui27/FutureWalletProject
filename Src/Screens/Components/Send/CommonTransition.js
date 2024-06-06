import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { useTheme } from '@react-navigation/native';
const CommonTransition = (

    {
        image,
        label,
        onPress,
    }
) => {

    const {colors: themeColor} = useTheme()
    return (


        <View style={{ alignItems: "center", marginHorizontal: dimen(10) }}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.img_background_view,{backgroundColor:themeColor.card}]}>
                    <Image source={image} style={[styles.images_style,]} />
                </View>
            </TouchableOpacity>

            <Text style={[styles.transfer_text,{color:themeColor.text}]}>{label}</Text>
        </View>

    )
}

export default CommonTransition

const styles = StyleSheet.create({

    img_background_view: {
        height: dimen(60),
        width: dimen(60),
        borderRadius: 60,
        backgroundColor: colors.White,
        alignItems: "center",
        justifyContent: "center"
    },
    transfer_text: {
        fontSize: 14,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,
        padding: dimen(8)
    },
})