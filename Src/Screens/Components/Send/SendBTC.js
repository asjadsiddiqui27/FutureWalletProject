import { Platform, StatusBar, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Common/CustomHeader'
import SeperateLine from '../../Common/SeperateLine'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../Common/CustomButton'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils'

const SendBTC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={{ marginHorizontal: 21, }}>
                <CustomHeader
                    header={"Send BTC"}
                />
            </View>
            <SeperateLine />

            <View style={{ flex: 1, marginHorizontal: 24 }}>
                <View style={{ flex: 0.8 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter"
                        keyboardType="numeric"
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10
    }
})