import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../Theme/Images'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import fonts from '../../Theme/Fonts'
import colors from '../../Theme/Colors'

const CustomHeader = ({

    header = "wallet",
    onPress
}) => {

    return (
        <View style={styles.header_view}>
            <TouchableOpacity onPress={onPress}>
                <Image source={images.headerIcon} style={styles.header_img} />
            </TouchableOpacity>
            <View style={styles.header_Text_View}>
                <Text style={styles.header_Text}>{header}</Text>


            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({

    header_view: {

        flexDirection: "row",
        marginTop: dimen(29),
        marginBottom: dimen(32),
        alignItems: "center",
    },
    header_img: {
        width: dimen(10),
        height: dimen(16)
    },
    header_Text_View: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header_Text: {
        fontSize: 20,
        color: colors.textcolor,
        fontFamily: fonts.PoppinsBold,
        // alignSelf:"center",  
        // marginLeft: dimen(100)
    }
})