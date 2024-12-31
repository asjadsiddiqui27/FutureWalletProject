import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../Theme/Colors";
import { getDimensionPercentage as dimen } from "../../Utils/Utils";
import fonts from "../../Theme/Fonts";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

function Button({

    onPress = () => { console.log("") },
    btnView,
    name = 'Continue',
    buttonStyle = styles.btn,
    textColor = styles.button,
    name_2,
    text2_style,
    customColor

}) {
    const { colors: themeColor, image } = useTheme()

    const renderBackground = () => {

        return (
            <TouchableOpacity style={{}} onPress={onPress}>
                <LinearGradient colors={customColor ? customColor : themeColor.commonBtn} style={buttonStyle} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    {name_2 && <Text style={text2_style}>{name_2}</Text>}
                    <Text style={[textColor, { color: customColor ? themeColor.text : colors.White }]}>{name}</Text>
                </LinearGradient>
            </TouchableOpacity>

        )

    };
    return (
        <View style={btnView}>
            {renderBackground()}
        </View>


    )
}

const styles = StyleSheet.create({

    button: {
        fontSize: 16,
        alignSelf: "center",
        // paddingTop: 10,
        color: colors.White,
        fontFamily: fonts.PoppinsBold,

    },

    btn: {
        height: 50,
        width: "auto",
        justifyContent:"center",
        // marginHorizontal: 24,
        backgroundColor: colors.background,
        borderRadius: 12,

    },
})
export default Button;
