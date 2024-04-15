import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Strings } from '../../../Theme/Strings'
import { images } from '../../../Theme/Images'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
const CustomCrypto = (

    {
        labelText,
        dollarValue,
        image,
        middleText,
        image2
    }
) => {
  return (
    <SafeAreaView>
    <Text style={styles.labelText}>{labelText}</Text>

    <View style={styles.first_row_view}>
        <View>
            <Text style={styles.dollarValue}>{dollarValue}</Text>
        </View>
        <View style={styles.multidata_view}>
            <Image source={image} style={styles.imgStyle} />
            <Text style={styles.middleText}>{middleText}</Text>
            <Image source={image2} style={styles.downArrowImg} />
        </View>
    </View>

</SafeAreaView>
  )
}

export default CustomCrypto

const styles = StyleSheet.create({

    first_row_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: dimen(70),
        backgroundColor: colors.lightCardBg,
        borderRadius: 12,
        marginTop: dimen(12)
    },
    labelText: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    dollarValue: {
        fontSize: 22,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,
        marginLeft: dimen(20)
    },
    multidata_view: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginRight: dimen(30)
    },

    middleText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black
    },
    imgStyle: {
        height: dimen(27),
        width: dimen(27)
    },
    downArrowImg: {
        height: dimen(9),
        width: dimen(16)
    },
})