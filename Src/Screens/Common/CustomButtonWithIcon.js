import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import PropTypes from 'prop-types'
// import colors from "../Theme/Colors";
// import { images } from "../Theme/Images";


function CustomBtnWIthIcon({

    onPressFun = () => { onPressFunc() },
    label = 'Click me',
    buttonStyle = styles.button,
    textColor = styles.btnText,
    LogoStyle = styles.imgStyle,
    ImgSrc,
    text_show = true,
    img_show = true

}) {

    return (

        <View>
            <TouchableOpacity onPress={onPressFun} style={buttonStyle}>
                {img_show &&

                    <Image style={LogoStyle} source={ImgSrc} /> 
                }
                {text_show &&

                    <Text style={textColor}>{label}</Text>
                 
                }

            </TouchableOpacity>
        </View>
    )
}


// CustomBtnWIthIcon.propTypes = {
//     onPress: PropTypes.func,
//     label: PropTypes.any,
//     buttonStyle: PropTypes.any,
//     textColor: PropTypes.any,
// }


function onPressFunc() {
    console.log("Presseddd")
}


export default CustomBtnWIthIcon;
