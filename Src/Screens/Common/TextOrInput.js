import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import InputText from './Input'
import { useTheme } from '@react-navigation/native';
import colors from '../../Theme/Colors';

const TextOrInput = (
    {
        label,
        placeholder,
        label2,
        onPress,
        labelStyle=styles.labelStyle
    }
) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <View style={{ gap: dimen(12.33), }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={[styles.label, { color: themeColor.subText }]}>{label}</Text>

                <TouchableOpacity onPress={onPress}>
                    {label2 &&
                        <Text style={[labelStyle,{color: colors.lightBlue}]}>{label2}</Text>}
                </TouchableOpacity>

            </View>

            <TextInput
                style={[styles.input, { borderColor: themeColor.blueBorder }]}
                placeholder={placeholder}
                keyboardType="numeric"
                placeholderTextColor={themeColor.subText}
            />
        </View>
    )
}

export default TextOrInput

const styles = StyleSheet.create({
    label: {
        fontSize: dimen(14),
        fontWeight: "500",
        color: "#D82122"
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.borderLineColor,
        fontSize: dimen(16),
        paddingLeft: dimen(16.34)

    },
})