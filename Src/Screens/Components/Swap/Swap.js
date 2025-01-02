import { Dimensions, Image, Platform, StatusBar, StyleSheet, Text, View, } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'
import colors from '../../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';

import { images } from '../../../Theme/Images';
import { Strings } from '../../../Theme/Strings';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import Button from '../../Common/CustomButton';
import CommonSwapRow from './CommonSwapRow';
import fonts from '../../../Theme/Fonts';
import CardRow from '../Send/CardRow';
import Bottomsheet from './Bottomsheet';
import { BlurView } from '@react-native-community/blur';

const height = Dimensions.get('window').height;
const Swap = (props) => {
    const panelRef = useRef(null);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const { colors: themeColor, image } = useTheme()
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Swap" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} />
            <SeperateLine />


            <View style={styles.top_twoBtn_view}>
                <Button name='On-Chain' buttonStyle={[styles.buttonStyle]} />
                <Button customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} name='Cross-Chain' buttonStyle={styles.buttonStyle} onPress={() => { props.navigation.navigate("SwapOnChain") }} />
            </View>

            <View style={styles.main_content_container}>
                <View style={[styles.Ist_contentView, { backgroundColor: themeColor.cardBackground }]}>
                    <Image source={image.transfer} style={{ position: "absolute", top: 72, right: 30 }} />
                    <CommonSwapRow image1={images.notification2} image2={images.settingGreater} label={Strings.Swap.label1} value={Strings.Swap.value1} balanceValue={Strings.Swap.BnbValue} tokenName={Strings.Swap.mainTextBnb} onPress={() => { props.navigation.navigate("Chain") }} longOnPress={() => { props.navigation.navigate("SwapTo") }}/>
                    <SeperateLine top_line={{ marginTop: dimen(26) }} />
                    <CommonSwapRow image1={images.teher} image2={images.settingGreater} label={Strings.Swap.label2} value={Strings.Swap.value1} balanceValue={Strings.Swap.usdtValue} tokenName={Strings.Swap.mainTextUsdt} longOnPress={() => { props.navigation.navigate("SwapFrom") }} />

                </View>
                <View style={styles.transactionValue_view}>
                    <Text style={[{ color: themeColor.subText }]}>Transaction Fee: </Text>
                    <Text style={[{ color: themeColor.text }]}>0.00469743 BNB</Text>
                </View>
                <View style={styles.fourBtn_view}>
                    <Button name='25%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} />
                    <Button name='50%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} />
                    <Button name='75%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} />
                    <Button name='100%' buttonStyle={styles.smallBtn} textColor={styles.btn_text} customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} />
                </View>
            </View>

            <View style={styles.bottom_mainView}>
                <View>
                    <CardRow text1={Strings.Swap.Quote} text2={Strings.Swap.quoteValue} />
                    <CardRow text1={Strings.Swap.providerFees} text2={Strings.Swap.providerFeesValue} />
                    <CardRow text1={Strings.Swap.networkFees} text2={Strings.Swap.networkFeesValue} />
                </View>
                <View style={{ marginTop: dimen(24), flexDirection: "row" }}>
                    <Button name='Approve BNB' customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} buttonStyle={[styles.buttonStyle]} onPress={() => { props.navigation.navigate("PreviewSwap") }} />
                    <Button name='Preview Swap' buttonStyle={[styles.buttonStyle]} onPress={() => panelRef.current.togglePanel()} />

                </View>

            </View>
           
            {bottomSheetVisible && Platform.OS === 'android' ? (
                <BlurView
                    style={StyleSheet.absoluteFill}
                    blurType="light"
                    blurAmount={3}
                    reducedTransparencyFallbackColor="white"
                />
            ) : null}
            <Bottomsheet
                onOpen={() => setBottomSheetVisible(true)}
                onClose={() => setBottomSheetVisible(false)}
                panelRef={panelRef}
                navigation={props.navigation}
            />
        </SafeAreaView>
    )
}

export default Swap

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    buttonStyle: {
        height: dimen(50),
        width: dimen(188),
        borderRadius: 12,
        justifyContent:"center"

    },
    main_content_container: {
        marginHorizontal: dimen(24),
        flex: 0.65
    },
    top_twoBtn_view: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: dimen(27)
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
        width: 75,
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

    }, bottom_mainView: {
        marginHorizontal: dimen(24),
        flex: 0.3
    }
})