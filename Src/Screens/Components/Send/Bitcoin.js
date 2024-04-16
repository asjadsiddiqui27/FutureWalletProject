import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { Strings } from '../../../Theme/Strings';
import { images } from '../../../Theme/Images';
import LinearGradient from 'react-native-linear-gradient';
import SeperateLine from '../../Common/SeperateLine';
import CustomHeader from '../../Common/CustomHeader';
import CommonTransition from './CommonTransition';
import colors from '../../../Theme/Colors'
import fonts from '../../../Theme/Fonts';


const Bitcoin = (props) => {

    const data = [

        { id: '1', imageSource: images.transferBitcoin, name: "swap", key: "From: 0x1fwf...vz9jsd", date: "Mar 04 2024", amount: "+1.96 BTC" },
        { id: '2', imageSource: images.transferBitcoin, name: "swap", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "-0.01 BTC" },
        { id: '3', imageSource: images.topTransferBitcoin, name: "transfer", key: "To: 0x1gtqw...vz9jsd", date: "Mar 03 2024", amount: "-0.01 BTC" },
        { id: '4', imageSource: images.smartContact, name: "Smart Contact Call", key: "To: 0x1gtqw...vz9jsd", date: "Mar 02 2024", amount: "-0.001 BTC" },
        { id: '5', imageSource: images.downTransferBitcoin, name: "Transfer", key: "From: 0x1fwf...vz9jsd", date: "Mar 01 2024", amount: "+1.94 BTC" },
    ]


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
        <SafeAreaView style={styles.main_container}>
            <CustomHeader header={Strings.English.Bitcoin.Bitcoin} header_style={styles.header} onPress={() => { props.navigation.navigate("Send") }}/>

          <SeperateLine/>

            <View style={styles.mainData_conatiner}>
                {/* ....................................topView........................................ */}

               
            <LinearGradient colors={['#90E6FE', '#C5F2FF', '#D8F7FF']} style={styles.istView}>

                    <View style={styles.heading}>
                        <Text style={styles.coin_text}>{Strings.English.Bitcoin.Coin}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.dollarValue_text}>{Strings.English.Bitcoin.dollarValue}</Text>
                            <Text style={styles.percentagevalue_text}>{Strings.English.Bitcoin.percentagevalue}</Text>
                        </View>
                    </View>

                    <View style={styles.centreImg_view}>
                        <Image source={images.notification1} style={styles.centreImg} />
                    </View>

                    <View>
                        <Text style={styles.ValueBTC_text}>{Strings.English.Bitcoin.ValueBTC}</Text>
                        <Text style={styles.amount_text}>{Strings.English.Bitcoin.amount}</Text>
                    </View>

                    <View style={styles.transition_data_view}>

                        <CommonTransition image={images.send} label={Strings.English.Bitcoin.Send} onPress={() => { props.navigation.navigate("SendBtc") }} />
                        <CommonTransition image={images.MinimizeSquare} label={Strings.English.Bitcoin.Receive} />
                        <CommonTransition image={images.swapBitcoin} label={Strings.English.Bitcoin.Swap} />
                    </View>


                </LinearGradient>

                <View>
                    <Text style={styles.Transactions_text}>{Strings.English.Bitcoin.Transactions}</Text>
                </View>

                {/*............................... flatlistData................................ */}
                <View>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginHorizontal: dimen(24), marginVertical:dimen(16)}}>
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

export default Bitcoin

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },
    mainData_conatiner: {
        marginHorizontal: dimen(24)
    },
    istView: {
     
        height: dimen(297),
        marginTop: dimen(40),
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
        color: colors.greenText
    },
    seprateLine:{
        borderWidth:0.4,
        borderColor:colors.borderColor,
        marginVertical:dimen(10)
    },
    amountRed:{
        color:colors.lossColor
    },
    amountGreen:{
        color:colors.parrotGreenText
    }

})