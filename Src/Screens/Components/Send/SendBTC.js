import { Platform, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Common/CustomHeader'
import SeperateLine from '../../Common/SeperateLine'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../Common/CustomButton'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils'
import colors from '../../../Theme/Colors'

const SendBTC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={{ marginHorizontal: 21, }}>
                <CustomHeader
                    header={"Send BTC"}
                />
            </View>
            <SeperateLine />

            <View style={{ flex: 1, margin:dimen(24)}}>
                <View style={{ flex: 0.8,gap:dimen(12.33)}}>
                    <Text style={styles.Address}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter"
                        keyboardType="numeric"
                        placeholderTextColor={colors.subText}
                    />
                </View>

                <View style={styles.footer}>
                    <Button name='Next' />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SendBTC

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    footer: {
        flex: 0.2,

        justifyContent: "flex-end",
        marginBottom: dimen(66.83)
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:colors.borderLineColor,
        fontSize:dimen(16),
        paddingLeft:dimen(16.34)

    },
    Address:{
        fontSize:dimen(14),
        fontWeight:"500",
    }
})