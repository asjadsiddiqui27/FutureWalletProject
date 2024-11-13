import React from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import {  useTheme } from '@react-navigation/native';

import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';
const Transactions1 = (props) => {
    const { colors: themeColor, image } = useTheme()
    const data = [

        { id: '1', imageSource: image.transfer, name: "Swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0127 BNB" },
        { id: '2', imageSource: image.transfer, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "-0.01 BNB" },
        { id: '3', imageSource: image.transfer, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "+0.0009 BNB" },
        { id: '4', imageSource: image.transfer, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 02 2024", amount: "-0.001 BNB" },
        { id: '5', imageSource: image.transfer, name: "Swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 01 2024", amount: "+0.0009 BNB" },
        { id: '6', imageSource: image.topTransfer, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "0 BNB" },
        { id: '7', imageSource: image.topTransfer, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "0 BNB" },
        { id: '8', imageSource: image.downTransfer, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0123 BNB" },
        { id: '9', imageSource: image.smartContact, name: "Smart Contact Call", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "-0.0123 BNB" },
        { id: '10', imageSource: image.smartContact, name: "Smart Contact Call", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0009 BNB" },
        { id: '11', imageSource: image.smartContact, name: "Smart Contact Call", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "0 BNB" },
    ]

    const getAmountColor = (amount) => {
        if (parseFloat(amount) > 0) {
            return styles.amountGreen;
        } else if (parseFloat(amount) < 0) {
            return styles.amountRed;
        } else {
            return styles.amountWhite;
        }
    };


    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => { props.navigation.navigate("TransferBnb") }}>


            <View style={styles.row}>
                <View style={{ flexDirection: "row" }} >
                    <Image source={item.imageSource} style={styles.image} />
                    <View style={{ marginLeft: dimen(8) }}>
                        <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                        <Text style={[styles.key, { color: themeColor.subText }]}>{item.key}</Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.amount_text, getAmountColor(item.amount)]}>{item.amount}</Text>
                    <Text style={[styles.date, { color: themeColor.subText }]}>{item.date}</Text>
                </View>

            </View>


        </TouchableOpacity>


    );

    return (
        <SafeAreaView style={[styles.main_conatiner, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Transaction history" header_style={styles.header}headerimgRight={{height:16,width:16}} imgRight={images.filter} headerimg={[styles.headerimg_style, { tintColor: themeColor.text }]} onPress={() => { props.navigation.navigate("Dashboard") }}/>

            <SeperateLine />

            <View style={styles.mainData_conatiner}>
                <FlatList
                    data={data}
                    ItemSeparatorComponent={() => ( 
                        <View style={{ marginHorizontal: dimen(24), marginVertical: dimen(16) }}>
                            <SeperateLine />
                        </View>
                    )}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>


        </SafeAreaView>
    )
}

export default Transactions1

const styles = StyleSheet.create({

    main_conatiner: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    headerText_view: {
        alignItems: "center",
        marginBottom: dimen(16)
    },
    headerText: {
        fontSize: dimen(16),
        color: colors.greenText,
        fontFamily: fonts.PoppinsMedium
    },

    top_line: {
        borderWidth: 0.195,
        marginTop: dimen(17),
        width: "100%",
        borderColor: colors.greenText,
    },
    mainData_conatiner: {
        flex: 1,
        marginHorizontal: dimen(24),
        marginTop:dimen(20)
    },
    istView: {

        height: dimen(271),
        marginTop: dimen(23),
        // width:dimen(381),
        borderRadius: 12
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: dimen(16),
        marginTop: dimen(19)
    },
    coin_text: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
        lineHeight: dimen(17)
    },
    dollarValue_text: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
        lineHeight: dimen(17)

    }, percentagevalue_text: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.parrotGreenText,
        lineHeight: dimen(17)
    },
    centreImg_view: {
        marginTop: dimen(8),
        alignItems: "center"
    },
    centreImg: {
        height: dimen(48),
        width: dimen(48),
    },
    ValueBTC_text: {
        fontSize: 28,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black,
        textAlign: 'center',
        marginTop: dimen(12)
    },
    amount_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsBold,
        color: colors.greenText,
        textAlign: 'center'
    },
    transition_data_view: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: dimen(20)
    },
    Transactions_text: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black,
        paddingVertical: dimen(24)
    },
    image: {
        height: dimen(44),
        width: dimen(44),
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black
    },
    key: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    amount: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.parrotGreenText
    },
    date: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
        textAlign: "right"
    },
    seprateLine: {
        borderWidth: 0.4,
        borderColor: colors.borderColor,
        marginVertical: dimen(10)
    },
    amountRed: {
        color: colors.lossColor
    },
    amountGreen: {
        color: colors.parrotGreenText
    },
    amountWhite: {
        color: 'white',
    },
})