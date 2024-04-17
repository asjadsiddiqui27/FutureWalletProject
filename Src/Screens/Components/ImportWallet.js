import {  SafeAreaView, StyleSheet, Text,  View } from 'react-native'
import React from 'react'
import InputText from '../Common/Input'
import colors from '../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import { images } from '../../Theme/Images'
import Button from '../Common/CustomButton'
import { Strings } from '../../Theme/Strings'
import CustomBtnWIthIcon from '../Common/CustomButtonWithIcon'
import fonts from '../../Theme/Fonts'
import CustomHeader from '../Common/CustomHeader'
import { useTheme } from '@react-navigation/native'
const ImportWallet = (props) => {
    const {colors: themeColor, image} = useTheme()
    return (
        <SafeAreaView style={[styles.main_container,{backgroundColor:themeColor.background}]}>
           
            <View style={styles.main_data_container}>
            <CustomHeader onPress={()=>{props.navigation.navigate("verifysecretphrase")}}  headerimg={{tintColor:themeColor.text}} header='Import Wallet'/>
                <View style={styles.input_View}>
                    <Text style={[styles.input_label,{color:themeColor.subText}]}>{Strings.English.importWallet.enteName}</Text>
                    <InputText placeholderText={Strings.English.importWallet.Wallet1} />
                </View>

                <View style={[styles.data_View,{backgroundColor:themeColor.cardBackground,borderColor:themeColor.cardBackground}]}>
                    <View style={styles.secretPhrase_view}>
                        <Text style={[styles.secretPhrase_text,{color:themeColor.subText}]}>{Strings.English.importWallet.secretPhrase}</Text>
                    </View>
                    <View style={styles.iconBtn_view}>
                        <CustomBtnWIthIcon main_View={styles.Btn_View} buttonStyle={styles.CopybtnStyle} ImgSrc={images.copyColored} LogoStyle={styles.copyLogo} textColor={styles.copyBtn_style} label={Strings.English.importWallet.Paste} />
                    </View>
                </View>
                <View style={styles.oneLine_text_view}>
                    <Text style={[styles.oneLine_text,{color:themeColor.subText}]}>{Strings.English.importWallet.middleText}</Text>
                </View>

            </View>
            <View style={styles.Bottom_main_continer}>

                <Button name='Import'  onPress={()=>{props.navigation.navigate("setpasscode")}}/>
                <Text style={styles.bottom_text}>{Strings.English.importWallet.bottomText}</Text>

            </View>



        </SafeAreaView>
    )
}

export default ImportWallet

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: "white",

    },
    main_data_container: {
        flex: 0.80,
        marginHorizontal: dimen(24)
    },
    input_View: {

    },
    input_label: {
        color: colors.greenText,
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        marginBottom: dimen(12.33),
    },
    data_View: {

        borderRadius: 12,
        height: dimen(167.13),
        justifyContent: "space-between",
        borderColor: colors.borderLineColor,
        borderWidth: 1,
        // padding: (6),
        marginTop: dimen(24.44),
    },
    secretPhrase_view: {
        marginTop: dimen(19),
        marginLeft: dimen(18)
    },
    secretPhrase_text: {
        fontSize: 16,
      fontFamily:fonts.PoppinsMedium,
        color: colors.greenText
    },
    iconBtn_view: {
        justifyContent: "flex-end",
        flexDirection: "row",
        marginBottom: dimen(22),
        marginRight: dimen(16)
    },
    CopybtnStyle: {
        flexDirection: "row",

    },
    copyLogo: {
        width: dimen(24),
        height: dimen(24),
    },
    copyBtn_style: {
        color: colors.lightBlue,
        fontSize: 15,

    },
    oneLine_text_view: {
        marginTop: dimen(16),
        alignItems: "center"
    },
    oneLine_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    Bottom_main_continer: {
        marginHorizontal: dimen(24),
        flex: 0.30,
        justifyContent: "flex-end",
        marginBottom: dimen(66),

    },
    bottom_text: {
        fontSize: 16,
     fontFamily:fonts.PoppinsBold,
        color: colors.lightBlue,
        marginTop: dimen(32),
        textAlign: "center"
    }

})