import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../Common/CustomButton';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import { useRoute, useTheme } from '@react-navigation/native';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Strings } from '../../../Theme/Strings';
import { tronWeb } from '../../../Utils/Utils';
import { useSelector } from 'react-redux';
const priavteKey="8A4B3F5A33D5D4DBDF0403C3791DC00AFCA26CC43A5A0F13A277256ED5D32D3B"
const fromAddress="TGPwRY1H8wLigVQ65AyMiW3b1nUFo7pZLd"
const SendTrx = (props) => {
    const { colors: themeColor, image } = useTheme();
    const [address, setAddress] = useState("");
    const [selectedItem, setSelectedItem] = useState("1");
    const [amount, setAmount] = useState("");
    const Fees = [
        { id: '1', name: "Slow", value: "(0.00112BTC) $0.1111" },
        { id: '2', name: "Medium", value: "(0.00112BTC) $0.1111" },
        { id: '3', name: "Fast", value: "(0.00112BTC) $0.1111" },
    ];
    const trxBalance = Number(useSelector((state) => state.app.tronBalance)) || 0;
    const handlePress = (itemId) => {
        setSelectedItem(itemId);
    };

    const generateData =async () => {
        const tradeobj = await tronWeb.transactionBuilder.sendTrx(address, amount*1000000, fromAddress, 1);
        console.log("tradeobj>>>>>>>>", tradeobj);
        const signedtxn = await tronWeb.trx.sign(tradeobj,priavteKey);
        console.log("signedtxn>>>>>>>>>.", signedtxn);
        const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
        console.log("recipt>>>>>>>>", receipt)
    
        const tronBalnce = await tronWeb.trx.getBalance("TGPwRY1H8wLigVQ65AyMiW3b1nUFo7pZLd");
        const formatTronBalance = tronBalnce / 10 ** 6
        console.log("tronBalnce1:::::", formatTronBalance ,"Trx")
        const tronBalnce2 = await tronWeb.trx.getBalance("TP3kGWFhP44c1T8fjXeBrxspKM38ViW9cx");
        const formatTronBalance2 = tronBalnce2 / 10 ** 6
        console.log("tronBalnce2:::::", formatTronBalance2 ,"Trx")
        const tronBalnce3 = await tronWeb.trx.getBalance("TRyV4XJ9Z2A7sNnnnceVb7GVtBaR6wWHaK");
        const formatTronBalance3 = tronBalnce3/ 10 ** 6
        console.log("tronBalnce3:::::", formatTronBalance3 ,"Trx" )
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={[styles.mainView, { backgroundColor: item.id === selectedItem ? "transparent" : themeColor.cardBackground, borderColor: themeColor.blueBorder }]}>
                <View>
                    <Text style={[styles.nameText, { color: item.id === selectedItem ? themeColor.text : themeColor.subText }]}>{item.name}</Text>
                    <Text style={[styles.valueText, { color: item.id === selectedItem ? colors.lightBlue : themeColor.subText }]}>{item.value}</Text>
                </View>
                <Image source={item.id === selectedItem ? images.btcFilled : images.btcOpen} style={styles.image} />
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Send TRX" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Send") }} />
            <SeperateLine />
            <View style={{ flex: 1, margin: dimen(24) }}>
                <View style={{ flex: 0.9 }}>
                    <View style={{ gap: dimen(12.33) }}>
                        <Text style={[styles.Address, { color: themeColor.subText }]}>{Strings.English.sendBtc.Address}</Text>
                        <TextInput
                            style={[styles.input, { borderColor: themeColor.blueBorder }]}
                            placeholder="Enter"
                            placeholderTextColor={themeColor.subText}
                            onChangeText={(text) => { setAddress(text) }}
                        />
                    </View>
                    <View style={{ marginTop: dimen(20), gap: dimen(12.33) }}>
                        <Text style={[styles.Address, { color: themeColor.subText }]}>{Strings.English.sendBtc.Amount}</Text>
                        <TextInput
                            style={[styles.input, { borderColor: themeColor.blueBorder }]}
                            placeholder="BTC Amount"
                            keyboardType="numeric"
                            placeholderTextColor={themeColor.subText}
                            onChangeText={(text) => { setAmount(text) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: dimen(12), marginBottom: dimen(36) }}>
                        <Text style={{ color: themeColor.subText, fontSize: 14, fontFamily: fonts.PoppinsMedium }}>$50,000</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: themeColor.subText, fontSize: 14, fontFamily: fonts.PoppinsMedium }}>{Strings.English.sendBtc.Balance}</Text>
                            <Text style={{ color: themeColor.text, fontSize: 14, fontFamily: fonts.PoppinsMedium }}>{trxBalance}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.Transaction, { color: themeColor.text }]}>{Strings.English.sendBtc.TransactionFee}</Text>
                        <View style={{ gap: 12, marginTop: dimen(14) }}>
                            <FlatList
                                data={Fees}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Button name={Strings.English.sendBtc.Next} onPress={generateData} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SendTrx;

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
        color: "white"
    },
    Address: {
        fontSize: dimen(14),
        fontWeight: "500",
    },
    Transaction: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold
    },
    mainView: {
        height: dimen(83),
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: dimen(24),
        borderRadius: dimen(12), marginBottom: dimen(12)
    },
    nameText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: dimen(22)
    },
    valueText: {
        fontSize: 14,
        fontFamily: fonts.PoppinsBold,
        lineHeight: dimen(22)
    },
    image: {
        width: 24,
        height: 24,
    }
});
