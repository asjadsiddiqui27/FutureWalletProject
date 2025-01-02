import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React from 'react'
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import Button from '../../Common/CustomButton';
import { images } from '../../../Theme/Images';
import { Strings } from '../../../Theme/Strings';
import CardRow from '../Send/CardRow';
import CommonSwapRow from './CommonSwapRow';
import fonts from '../../../Theme/Fonts';

const SwapOnChain = (props) => {
    const { colors: themeColor, image } = useTheme()
  return (
    <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
    <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
    <CustomHeader header="Swap" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} />
    <SeperateLine />

    <View style={styles.top_twoBtn_view}>
                <Button customColor={[themeColor.cardBackground,themeColor.cardBackground,themeColor.cardBackground]} name='On-Chain' buttonStyle={[styles.buttonStyle]} onPress={()=>{props.navigation.navigate("Swap")}}/>
                <Button  name='Cross-Chain' buttonStyle={styles.buttonStyle} />
            </View>

            <View style={styles.main_content_container}>
                <View style={[styles.Ist_contentView, { backgroundColor: themeColor.cardBackground }]}>
                    <Image source={image.transfer} style={{ position: "absolute", top: 73, right: 30 }} />
                    <CommonSwapRow image1={images.notification2} image2={images.settingGreater} label={Strings.Swap.label1} value={Strings.Swap.value1} balanceValue={Strings.Swap.BnbValue} tokenName={Strings.Swap.mainTextBnb} onPress={()=>{props.navigation.navigate("Chain")}}/>
                    <SeperateLine top_line={{ marginTop: dimen(26) }} />
                    <CommonSwapRow image1={image.ethImage} image2={images.settingGreater} label={Strings.Swap.label2} value={Strings.Swap.value1} balanceValue={Strings.Swap.usdtValue} tokenName={Strings.Swap.ETH} />

                </View>
                <View style={styles.transactionValue_view}>
                    <Text style={[{ color: themeColor.subText }]}>Transaction Fee: </Text>
                    <Text style={[{ color: themeColor.text }]}>0.00469743 BNB</Text>
                </View>
                <View style={styles.fourBtn_view}>
                    <Button name='25%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} />
                    <Button name='50%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} customColor={[themeColor.cardBackground,themeColor.cardBackground,themeColor.cardBackground]}/>
                    <Button name='75%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} customColor={[themeColor.cardBackground,themeColor.cardBackground,themeColor.cardBackground]}/>
                    <Button name='100%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} customColor={[themeColor.cardBackground,themeColor.cardBackground,themeColor.cardBackground]}/>
                </View>
            </View>

            <View style={styles.bottom_mainView}>
               
                <View style={{marginTop:dimen(24)}}>
                    <Button name='Preview'  onPress={()=>{props.navigation.navigate("PreviewSwap")}}/>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default SwapOnChain

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    buttonStyle: {
        height: dimen(49),
        width: dimen(188),
        borderRadius: 12,
        justifyContent:"center"

    },
    main_content_container: {
        marginHorizontal: dimen(24),
        flex:0.8
    },
    top_twoBtn_view:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:dimen(27)
    },
    Ist_contentView: {
        height: dimen(230),
        marginTop: dimen(24),
        borderRadius: dimen(12)
    },
    transactionValue_view: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: dimen(10)
    },
    fourBtn_view: {
        flexDirection: "row",

    },

    smallBtn: {
        marginRight: dimen(5),
        marginTop: 10,
        borderRadius: 10,
        width: 73,
        height: 45,
        // borderColor: colors.textColor,
        // borderWidth: 1,


    },
    btn_text: {
        fontSize: 16,
        textAlign: "center",
        margin: dimen(15),
        color: colors.White,
        fontFamily: fonts.PoppinsMedium,

    },
    smallBtn25: {

        marginTop: 10,
        borderRadius: 10,
        width: 88,
        height: 45,
        gap: 10,
        borderColor: colors.textColor,
        borderWidth: 1,

    },bottom_mainView:{
        marginHorizontal:dimen(24),
        flex:0.2
    }
})