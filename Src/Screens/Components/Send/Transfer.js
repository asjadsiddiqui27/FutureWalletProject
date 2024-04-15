import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import CustomHeader from '../../Common/CustomHeader';
import { Strings } from '../../../Theme/Strings';
import fonts from '../../../Theme/Fonts';
import CardRow from './CardRow';
import Button from '../../Common/CustomButton';
import SeperateLine from '../../Common/SeperateLine';
const Transfer = (props) => {
    return (
        <SafeAreaView style={styles.main_container}>
            <CustomHeader header={Strings.English.Transfer.Transfer} header_style={styles.header} onPress={() => { props.navigation.navigate("SendBtc") }} />

            <SeperateLine/>



            <View style={styles.main_content_view}>

                <View style={styles.top_view}>
                    <Text style={styles.ValueBTC_text}>{Strings.English.Transfer.BtcValue}</Text>
                    <Text style={styles.amount_text}>{Strings.English.Transfer.amount}</Text>
                </View>

                <View style={styles.data_View}>
                    <CardRow text1={Strings.English.Transfer.DateTxt} text2={Strings.English.Transfer.dateOrTime}/>
                    <CardRow text1={Strings.English.Transfer.Status} text2={Strings.English.Transfer.StatusData}/>
                    <CardRow text1={Strings.English.Transfer.Recipient} text2={Strings.English.Transfer.key}/>
                </View>

                <View style={styles.data_View2}>
                    <CardRow text1={Strings.English.Transfer.NetworkFeeTxt} text2={Strings.English.Transfer.NetworkFee}/>
                </View>
            </View>

            <View style={{marginHorizontal:dimen(24)}}>
                <Button name='Send' onPress={() => { props.navigation.navigate("Bitcoin") }}/>
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