import React, { useEffect } from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { useIsFocused } from '@react-navigation/native';
import { Strings } from '../../../Theme/Strings';
import { images } from '../../../Theme/Images';
import LinearGradient from 'react-native-linear-gradient';
import CommonTransition from '../Send/CommonTransition';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';

const data = [

    { id: '1', imageSource: images.transferBitcoin, name: "Swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+0.0127 WBNB" },
    { id: '2', imageSource: images.transferBitcoin, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "-0.01 WBNB" },
    { id: '3', imageSource: images.transferBitcoin, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "+0.0009 WBNB" },
    { id: '4', imageSource: images.transferBitcoin, name: "Swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 02 2024", amount: "-0.001 WBNB" },
    { id: '5', imageSource: images.transferBitcoin, name: "Swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 01 2024", amount: "+0.0009 WBNB" },
]

const Transactions = (props) => {

    const isFocused = useIsFocused()

    useEffect(() => {

        if (isFocused) {
            StatusBar.setBackgroundColor('white', true)
        }

        return () => { }
    }, [isFocused])




    const getAmountColor = (amount) => {
        if (amount.startsWith('-')) {
            return styles.amountRed;
        } else {
            return styles.amountGreen;
        }
    };

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => { props.navigation.navigate("Bitcoin") }}>

            <View style={styles.row}>
                <View style={{ flexDirection: "row" }} >
                    <Image source={item.imageSource} style={styles.image} />
                    <View style={{ marginLeft: dimen(8) }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.key}>{item.key}</Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.amount_text, getAmountColor(item.amount)]}>{item.amount}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>

            </View>


        </TouchableOpacity>


    );


    return (


        <SafeAreaView style={styles.main_conatiner}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CustomHeader header={Strings.English.Transactions.WrappedBNB} header_style={styles.header} imgRight={images.bell} headerimg={styles.headerimg_style} />

            <View style={styles.headerText_view}>
                <Text style={styles.headerText}>{Strings.English.Transactions.heading}</Text>
            </View>
            <SeperateLine />

            <View style={styles.mainData_conatiner}>

                <LinearGradient colors={['#90E6FE', '#C5F2FF', '#D8F7FF']} style={styles.istView}>


                    <View style={styles.centreImg_view}>
                        <Image source={images.notification1} style={styles.centreImg} />
                    </View>

                    <View>
                        <Text style={styles.ValueBTC_text}>{Strings.English.Transactions.WBNB}</Text>
                        <Text style={styles.amount_text}>{Strings.English.Transactions.dollarValue}</Text>
                    </View>

                    <View style={styles.transition_data_view}>

                        <CommonTransition image={images.send} label={Strings.English.Transactions.Send} onPress={() => { props.navigation.navigate("SendBtc") }} />
                        <CommonTransition image={images.MinimizeSquare} label={Strings.English.Transactions.Receive} />
                        <CommonTransition image={images.swapBitcoin} label={Strings.English.Transactions.Swap} />
                        <CommonTransition image={images.RecieveSquare} label={Strings.English.Transactions.Buy} />
                        <CommonTransition image={images.sell} label={Strings.English.Transactions.Sell} />
                    </View>


                </LinearGradient>
                <View>
                    <Text style={styles.Transactions_text}>{Strings.English.Bitcoin.Transactions}</Text>
                </View>

                <View>
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
        marginBottom:dimen(16)
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
    }
})