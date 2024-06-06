import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'
import { useTheme } from '@react-navigation/native'

const SeperateLine = (
    {
        top_line
    }
) => {
  const {colors: themeColor, image} = useTheme()
  return (
    <View style={[styles.top_line,top_line,{borderColor:themeColor.seperarteLineColor}]} />
  )
}

export default SeperateLine

const styles = StyleSheet.create({

    top_line: {
        borderWidth: 0.2,
        width: "100%",
        borderColor: colors.seperateLine,
    },
})