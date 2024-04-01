import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../Theme/Colors";
import { getDimensionPercentage as dimen } from "../../Utils/Utils";
import fonts from "../../Theme/Fonts";





function Button({
    onPress = () => { console.log("Btn pressed")},
    name = 'Click me',
    buttonStyle = styles.btn,
    textColor = styles.button,

}) {

    return (
        <View style={styles.btnView}>
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
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
    fontFamily:fonts.PoppinsBold ,
    
    },

    btn: {
        height: 50,
        width: "auto",
        // marginHorizontal: 24,
        backgroundColor: colors.background,
        borderRadius: 12,

    },
})



export default Button;
