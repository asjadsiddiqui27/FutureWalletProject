import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../Theme/Colors";




function Button({
    onPress = () => { onPressFunc() },
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
        fontWeight: "700",
        textAlign: "center",
        margin: 15,
        color: colors.White,
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
