import { Image, Platform, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../../Common/CustomHeader'
import SeperateLine from '../../Common/SeperateLine'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../Common/CustomButton'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils'
import colors from '../../../Theme/Colors'
import { useRoute, useTheme } from '@react-navigation/native'
import { images } from '../../../Theme/Images'
import CommonViewSndBtc from './CommonViewSndBtc'
import fonts from '../../../Theme/Fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SendBTC = (props) => {
    const { colors: themeColor, image } = useTheme();
    const [data, setData] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const getBalance = JSON.parse(await AsyncStorage.getItem("filteredData"));
                console.log("get data:::::::::::::",getBalance);
                setData(getBalance);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Send BTC" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("SendBtc") }} />
            <SeperateLine />
            <View style={{ flex: 1, margin: dimen(24) }}>
                <View style={{ flex: 0.9}}>


                    <View style={{ gap: dimen(12.33) }}>
                        <Text style={[styles.Address, { color: themeColor.subText }]}>Address</Text>
                        <TextInput
                            style={[styles.input, { borderColor: themeColor.blueBorder }]}
                            placeholder="Enter"
                            placeholderTextColor={themeColor.subText}
                            
                        />
                    </View>
                    <View style={{ marginTop: dimen(20), gap: dimen(12.33) }}>
                        <Text style={[styles.Address, { color: themeColor.subText }]}>Amount</Text>
                        <TextInput
                            style={[styles.input, { borderColor: themeColor.blueBorder }]}
                            placeholder="ETH Amount"
                            keyboardType="numeric"
                            placeholderTextColor={themeColor.subText}
                        />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:dimen(12),marginBottom:dimen(36)}}>
                        <Text style={{color:themeColor.subText,fontSize:14,fontFamily:fonts.PoppinsMedium}}>$50,000</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:themeColor.subText,fontSize:14,fontFamily:fonts.PoppinsMedium}}>Balance:</Text>
                            <Text style={{color:themeColor.text,fontSize:14,fontFamily:fonts.PoppinsMedium}}>{data}</Text>
                        </View>

                    </View>
                    <View>
                        <Text style={[styles.Transaction, { color: themeColor.text }]}>Transaction Fee</Text>
                        <View style={{ gap: 12, marginTop: dimen(14) }}>
                        <CommonViewSndBtc  name="Slow" value="(0.00112BTC) $0.1111" />
                            <CommonViewSndBtc name="Medium" value="(0.00112BTC) $0.1111"  />
                            <CommonViewSndBtc name="Fast" value="(0.00112BTC) $0.1111"  />
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Button name='Next' onPress={() => { props.navigation.navigate("Transfer") }} />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SendBTC

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    footer: {
        flex: 0.1,
        justifyContent: "flex-end",
        marginBottom: dimen(66.83)
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.borderLineColor,
        fontSize: dimen(16),
        paddingLeft: dimen(16.34),
        color:"white"

    },
    Address: {
        fontSize: dimen(14),
        fontWeight: "500",
    },
    Transaction: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold
    }
})