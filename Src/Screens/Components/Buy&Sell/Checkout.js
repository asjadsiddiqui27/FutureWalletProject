import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Common/CustomHeader'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';
import Button from '../../Common/CustomButton';
import { Strings } from '../../../Theme/Strings';
import CardRow from '../Send/CardRow';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
const Checkout = (props) => {
    const {colors: themeColor, image} = useTheme()
    return (
        <SafeAreaView style={[styles.main_container,{backgroundColor:themeColor.background}]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header={Strings.English.checkout.checkout} header_style={styles.header} onPress={() => { props.navigation.navigate("SellCrypto") }} headerimg={{tintColor:themeColor.text}} />
            {/* ................................................................. */}
            <SeperateLine />

            <View style={styles.top_container}>
                <View style={[styles.top_view,{backgroundColor:themeColor.cardBackground}]}>
                    <Image source={image.chcekoutEth} style={styles.centre_imgStyle} />
                    <Text style={[styles.ethereum_text,{color:themeColor.text}]}>{Strings.English.checkout.Ethereum_text}</Text>
                    <Text style={[styles.top_value_text,{color:themeColor.text}]}>{Strings.English.checkout.Ethereum_value}</Text>
                </View>
                <View style={styles.IIndText_view}>
                    <Text style={[styles.dollarValueETH,{color:themeColor.text}]}>{Strings.English.checkout.dollarValueETH}</Text>
                    <Text style={[styles.longText,{color:themeColor.subText}]}>{Strings.English.checkout.longText}</Text>
                </View>


                <SeperateLine top_line={styles.Seperate_line} />
                {/* .............................................................. */}



                <View style={styles.first_caredRow_view}>
                    <View style={styles.text_img_view}>
                        <Image source={images.whiteTriangle} style={styles.IInd_img} />
                        <Text style={[styles.alchemy_text,{color:themeColor.text}]}>{Strings.English.checkout.alchemy}</Text>
                    </View>
                    <View>
                        <Text style={[styles.Payment_Gateway_text,{color:themeColor.subText}]}>{Strings.English.checkout.payment_Gateway}</Text>
                    </View>
                </View>

                <View style={styles.CardRow_view}>
                    <CardRow text1={Strings.English.checkout.NetworkFee} text2={Strings.English.checkout.dollarValue1} />
                    <CardRow text1={Strings.English.checkout.PlatformFee} text2={Strings.English.checkout.dollarValue2} />
                    <SeperateLine top_line={styles.Seperate_line2} />
                    <CardRow text1={Strings.English.checkout.TotalAmount} text2={Strings.English.checkout.TotalValue} />
                </View>


            </View>

            <View style={styles.bottom_view}>
                <Text style={[styles.bottom_text,{color:themeColor.subText}]}>{Strings.English.checkout.bottom_text}</Text>
                <Button name={Strings.English.checkout.button_text} onPress={() => { props.navigation.navigate("ManageWallets") }} />
            </View>

        </SafeAreaView>
    )
}

export default Checkout

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
    top_container: {
        marginHorizontal: dimen(24),
        flex: 0.85
    },
    top_view: {
        // width:dimen(382),
        alignItems: "center",
        justifyContent: "center",
        height: dimen(119),
        marginTop: dimen(51),
        borderRadius: 12,
        backgroundColor: colors.blueBackground
    },
    centre_imgStyle: {
        height: dimen(59),
        width: dimen(59),
        position: "absolute",
        bottom: 85
    },
    ethereum_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: dimen(20),
        color: colors.Black
    },
    top_value_text: {
        fontSize: 26,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black
    },

    IIndText_view: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: dimen(25),
        marginTop: dimen(20)
    },
    dollarValueETH: {
        fontSize: 16,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black
    },
    longText: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        textAlign: "center",
        color: colors.greenText
    },
    Seperate_line: {
        borderWidth: 0.2,
        marginVertical: dimen(16),
        width: "100%",
        borderColor: colors.seperateLine,
    },
    first_caredRow_view: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    text_img_view: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10

    },
    IInd_img: {
        height: dimen(20),
        width: dimen(20)
    },
    alchemy_text: {
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium
    },
    Payment_Gateway_text: {
        color: colors.greenText,
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium
    },
    Seperate_line2: {
        borderWidth: 0.2,
        marginTop: dimen(16),
        width: "100%",
        borderColor: colors.seperateLine,
    },
    CardRow_view: {
        marginTop: dimen(20)

    },
    bottom_text: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        textAlign: "center",
        marginBottom: dimen(30)
    },
    bottom_view: {
        marginBottom: 80,
        flex: 0.15,
        marginHorizontal: dimen(24)
    }
})