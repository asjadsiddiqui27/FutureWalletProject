import { StyleSheet, Text, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';

import React from 'react'
import { useTheme } from '@react-navigation/native'
import CustomHeader from '../../Common/CustomHeader'
import { Strings } from '../../../Theme/Strings'
import colors from '../../../Theme/Colors'
import SeperateLine from '../../Common/SeperateLine';
import fonts from '../../../Theme/Fonts';
import CardRow from '../Send/CardRow';
import Button from '../../Common/CustomButton';

const TransferBnb = (props) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <View style={[styles.main_conatiner,{backgroundColor:themeColor.background}]}>
            <CustomHeader header="Transfer" header_style={styles.header} headerimg={[styles.headerimg_style, { tintColor: themeColor.text }]} onPress={() => { props.navigation.navigate("Portfolio") }}/>
            <SeperateLine />
            <View style={{flex:0.85}}>


                <View style={styles.top_text}>
                    <Text style={[styles.bnbValue_text, { color: themeColor.text }]}>-0.00008896 BNB</Text>
                    <Text style={[styles.dollar_text, { color: themeColor.subText }]}>$0.03</Text>
                </View>

                <View style={[styles.content_view, { backgroundColor: themeColor.cardBackground }]}>
                    <CardRow text1={Strings.Transfer.DateTxt} text2={Strings.Transfer.dateOrTime} />
                    <CardRow text1={Strings.Transfer.Status} text2={Strings.Transfer.StatusData} />
                    <CardRow text1={Strings.Transfer.Recipient} text2={Strings.Transfer.key} />
                </View>
                <View style={[styles.data_View2, { backgroundColor: themeColor.cardBackground }]}>
                    <CardRow text1={Strings.Transfer.NetworkFeeTxt} text2={Strings.Transfer.NetworkFee2} />
                </View>
            </View>
            <View style={styles.btn_view}>
                <Button name='View on block explorer' onPress={() => { props.navigation.navigate("Bitcoin") }}/>
            </View>

        </View>
    )
}

export default TransferBnb

const styles = StyleSheet.create({

    main_conatiner: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_text: {
        marginVertical: dimen(32)
    },
    bnbValue_text: {
        fontSize: dimen(28),
        fontFamily: fonts.PoppinsBold,
        textAlign: "center"
    },
    dollar_text: {
        fontSize: dimen(16),
        fontFamily: fonts.PoppinsBold,
        textAlign: "center"
    },
    content_view: {
        height: dimen(128),
        marginHorizontal: dimen(24),
        borderRadius: dimen(12)
    },
    data_View2: {
        marginHorizontal: dimen(24),
        height: dimen(58),
        backgroundColor: colors.lightCardBg,
        marginTop: dimen(12),
        borderRadius: dimen(12)
    },
    btn_view: {
        marginHorizontal: dimen(24),
        flex: 0.15
    }
})