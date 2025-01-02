import React, { useEffect } from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { useIsFocused, useTheme } from '@react-navigation/native';
import { Strings } from '../../../Theme/Strings';
import { images } from '../../../Theme/Images';
import LinearGradient from 'react-native-linear-gradient';
import CommonTransition from '../Send/CommonTransition';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';



const Transactions = (props) => {
    const { colors: themeColor, image } = useTheme()
    const data = [

        { id: '1', imageSource: image.transfer, name: "Swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0127 WBNB" },
        { id: '2', imageSource: image.transfer, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "-0.01 WBNB" },
        { id: '3', imageSource: image.transfer, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "+0.0009 WBNB" },
        { id: '4', imageSource: image.transfer, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 02 2024", amount: "-0.001 WBNB" },
        { id: '5', imageSource: image.transfer, name: "Swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 01 2024", amount: "+0.0009 WBNB" },
        { id: '6', imageSource: image.topTransfer, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "0 BNB" },
        { id: '7', imageSource: image.topTransfer, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "0 BNB" },
        { id: '8', imageSource: image.downTransfer, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0123 BNB" },
        { id: '9', imageSource: image.smartContact, name: "Smart Contact Call", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "-0.0123 BNB" },
        { id: '10', imageSource: image.smartContact, name: "Smart Contact Call", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0009 WBNB" },
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
            <CustomHeader header={Strings.Transactions.WrappedBNB} header_style={styles.header} imgRight={image.bell} headerimg={[styles.headerimg_style, { tintColor: themeColor.text }]} />

            <View style={styles.headerText_view}>
                <Text style={[styles.headerText, { color: themeColor.subText }]}>{Strings.Transactions.heading}</Text>
            </View>
            <SeperateLine />

            <View style={styles.mainData_conatiner}>

                <LinearGradient colors={themeColor.linearCard} style={styles.istView}>


                    <View style={styles.centreImg_view}>
                        <Image source={images.notification1} style={styles.centreImg} />
                    </View>

                    <View>
                        <Text style={[styles.ValueBTC_text, { color: themeColor.text }]}>{Strings.Transactions.WBNB}</Text>
                        <Text style={[styles.amount_text, { color: themeColor.text }]}>{Strings.Transactions.dollarValue}</Text>
                    </View>

                    <View style={styles.transition_data_view}>

                        <CommonTransition image={image.send} label={Strings.Transactions.Send} onPress={() => { props.navigation.navigate("SendBtc") }} />
                        <CommonTransition image={image.recieve} label={Strings.Transactions.Receive} />
                        <CommonTransition image={image.swap} label={Strings.Transactions.Swap} />
                        <CommonTransition image={image.buy} label={Strings.Transactions.Buy} />
                        <CommonTransition image={image.sell} label={Strings.Transactions.Sell} />
                    </View>


                </LinearGradient>
                    <Text style={[styles.Transactions_text, { color: themeColor.text }]}>{Strings.Bitcoin.Transactions}</Text>
                


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

export default Transactions

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
        flex:1,
        marginHorizontal: dimen(24)
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