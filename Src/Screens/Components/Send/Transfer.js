import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import CustomHeader from '../../Common/CustomHeader';
import { Strings } from '../../../Theme/Strings';
import fonts from '../../../Theme/Fonts';
import CardRow from './CardRow';
import Button from '../../Common/CustomButton';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
const Transfer = (props) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header={Strings.Transfer.Transfer} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("SendBtc") }} />
            <SeperateLine />


            <View style={styles.main_content_view}>

                <View style={styles.top_view}>
                    <Text style={[styles.ValueBTC_text,{color:themeColor.text}]}>{Strings.Transfer.BtcValue}</Text>
                    <Text style={[styles.amount_text,{color:themeColor.subText}]}>{Strings.Transfer.amount}</Text>
                </View>

                <View style={[styles.data_View,{backgroundColor:themeColor.cardBackground}]}>
                    <CardRow text1={Strings.Transfer.DateTxt} text2={Strings.Transfer.dateOrTime}/>
                    <CardRow text1={Strings.Transfer.Status} text2={Strings.Transfer.StatusData}/>
                    <CardRow text1={Strings.Transfer.Recipient} text2={Strings.Transfer.key}/>
                </View>

                <View style={[styles.data_View2,{backgroundColor:themeColor.cardBackground}]}>
                    <CardRow text1={Strings.Transfer.NetworkFeeTxt} text2={Strings.Transfer.NetworkFee}/>
                </View>
            </View>

            <View style={{marginHorizontal:dimen(24)}}>
                <Button name='Send' onPress={() => { props.navigation.navigate("Send") }}/>
            </View>



        </SafeAreaView>
    )
}

export default Transfer

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
    main_content_view: {
        marginHorizontal: dimen(24),
        flex:0.9
    },
    top_view: {
        alignItems: "center"
    },
    ValueBTC_text: {
        fontSize: dimen(28),
        fontFamily: fonts.PoppinsBold,
        color: colors.Black,
        marginTop: dimen(32)
    },
    amount_text: {
        fontSize: dimen(16),
        fontFamily: fonts.PoppinsBold,
        color: colors.greenText,

    },
    data_View: {
        height: dimen(129),
        backgroundColor: colors.lightCardBg,
        marginTop: dimen(32),
        borderRadius: dimen(12)
    },
    data_View2:{
        height: dimen(58),
        backgroundColor: colors.lightCardBg,
        marginTop: dimen(12),
        borderRadius: dimen(12)
    }
})