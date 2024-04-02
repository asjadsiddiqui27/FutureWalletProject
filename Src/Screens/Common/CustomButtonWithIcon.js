import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import PropTypes from 'prop-types'
// import colors from "../Theme/Colors";
// import { images } from "../Theme/Images";


function CustomBtnWIthIcon({

    onPressFun = () => { onPressFunc() },
    label = 'Click me',
    main_View,
    buttonStyle ,
    textColor ,
    LogoStyle ,
    ImgSrc,
    

}) {

    return (

        <View style={main_View}>
            <TouchableOpacity onPress={onPressFun} style={buttonStyle}>
                {ImgSrc &&

                    <Image style={LogoStyle} source={ImgSrc} /> 
                }
                {label &&
                    <Text style={textColor}>{label}</Text>
                 
                }

            </TouchableOpacity>
        </View>
    )
}




function onPressFunc() {
    console.log("Custom btn _ 2")
}


export default CustomBtnWIthIcon;
