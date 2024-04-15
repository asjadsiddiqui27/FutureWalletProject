import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'

const SeperateLine = (
    {
        top_line
    }
) => {
  return (
    <View style={[styles.top_line,top_line]} />
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