import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../Theme/Colors";
import { getDimensionPercentage as dimen } from "../../Utils/Utils";
import fonts from "../../Theme/Fonts";





function SmallButton({

    onPress = () => { console.log("Btn pressed") },
    btnView,
    name = 'Continue',
    buttonStyle = styles.btn,
    textColor = styles.button,
    name_2,
    text2_style,

}) {


    return (


        <View style={btnView}>
            <TouchableOpacity onPress={onPress} style={[buttonStyle]}>
                {name_2 && <Text style={text2_style}>{name_2}</Text>}
                <Text style={textColor}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({

    button: {
        fontSize: 16,
        // fontWeight: "700",
        textAlign: "center",
        margin: dimen(15),
        color: colors.White,
        fontFamily: fonts.PoppinsBold,

    },

    btn: {
        height: 50,
        width: "auto",
        // marginHorizontal: 24,
        backgroundColor: colors.background,
        borderRadius: 12,

    },
})



export default SmallButton;
