import { Image, StyleSheet, Text, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';

import React from 'react'
import { useTheme } from '@react-navigation/native'
import { images } from '../../../Theme/Images'
import fonts from '../../../Theme/Fonts';

const CommonImgTxtRow = (
    {
    imagedata,
    label
    }
) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <View style={[styles.content_view, { borderColor: themeColor.blueBorder }]}>
            <Image source={imagedata} style={styles.img} />
            <Text style={[styles.text, { color: themeColor.text }]}>{label}</Text>
        </View>
    )
}

export default CommonImgTxtRow

const styles = StyleSheet.create({
    content_view: {
        borderWidth: 1,
        height: dimen(84),
        borderRadius: dimen(12),
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    text: {
        fontSize: 22,
        fontFamily: fonts.PoppinsMedium
    },
    img: {
        height: dimen(44),
        width: dimen(44),
        marginLeft: dimen(20)
    }
})