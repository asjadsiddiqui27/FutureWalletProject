import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../Theme/Images'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import fonts from '../../Theme/Fonts'
import colors from '../../Theme/Colors'

const CustomHeader = ({

    header,
    onPress,
    onPress2,
    header_style,
    imgLeft=images.headerIcon,
    headerimg=styles.header_img,
    imgRight
}) => {

    return (
        <View style={[styles.header_view,header_style]}>
          
            <TouchableOpacity onPress={onPress}>
                <Image source={imgLeft} style={headerimg} />
            </TouchableOpacity>
            <View style={styles.header_Text_View}>
                <Text style={styles.header_Text}>{header}</Text>
            </View>

{imgRight&&
            <TouchableOpacity onPress={onPress2}>
                <Image source={imgRight} style={headerimg} />
            </TouchableOpacity>
}


        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({

    header_view: {

        flexDirection: "row",
        marginTop: dimen(29),
        marginBottom: dimen(20),
        alignItems: "center",
        // backgroundColor:"red",
        
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