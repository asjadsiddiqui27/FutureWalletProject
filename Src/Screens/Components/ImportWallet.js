import { Alert, Clipboard, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { setWalletName } from '../../Redux/Actions/DataAction'
const ImportWallet = (props) => {
    const [value, setValue] = useState("")

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const { colors: themeColor, image } = useTheme()
    const handlePaste = async () => {
        const text = await Clipboard.getString(); 
        setValue(text);
      };

      const handleSetValue = (text) => {
        const regex = /^[a-zA-Z0-9]*$/;
        if (regex.test(text)) {
          setName(text);
        }
      };


      const handlePress = async () => {
        if (name.length === 0) {
          Alert.alert("Please Enter Name");
          return;
        }
        dispatch(setWalletName(name));
        console.log("Set Wallet Name:::::::::::::::::::", name);
      
        props.navigation.navigate("setpasscode");
      };
    
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <View style={styles.main_data_container}>
                <CustomHeader onPress={() => { props.navigation.navigate("onboarding") }} headerimg={{ tintColor: themeColor.text }} header='Import Wallet' />
                <View style={styles.input_View}>
                    <Text style={[styles.input_label, { color: themeColor.subText }]}>{Strings.importWallet.enteName}</Text>
                    <InputText placeholderText={Strings.importWallet.Wallet1} maximumLength={25} value={name} onChngFunction={handleSetValue}/>
                </View>

                <View style={[styles.data_View, { backgroundColor: themeColor.cardBackground, borderColor: themeColor.cardBackground }]}>

                    <View style={styles.secretPhrase_view}>
                        <Text style={[styles.secretPhrase_text, { color: themeColor.subText }]}>{Strings.importWallet.secretPhrase}</Text>
                    </View>

                    <TextInput numberOfLines={2} value={value} style={{color:themeColor.text,paddingHorizontal:20}}/>
                    <View style={styles.iconBtn_view}>
                        <CustomBtnWIthIcon
                            onPressFun={handlePaste}
                            main_View={styles.Btn_View}
                            buttonStyle={styles.CopybtnStyle}
                            ImgSrc={image.copyIcon} LogoStyle={styles.copyLogo} textColor={styles.copyBtn_style} label={Strings.importWallet.Paste} />
                    </View>
                </View>
                <View style={styles.oneLine_text_view}>
                    <Text style={[styles.oneLine_text, { color: themeColor.subText }]}>{Strings.importWallet.middleText}</Text>
                </View>

            </View>
            <View style={styles.Bottom_main_continer}>

                <Button name='Import' 
                 onPress={handlePress}
                // onPress={() => { props.navigation.navigate("setpasscode") }}
                 />
                <Text style={styles.bottom_text}>{Strings.importWallet.bottomText}</Text>
                <Text style={styles.bottom_text}>{Strings.importWallet.bottomText2}</Text>
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
        fontFamily: fonts.PoppinsMedium,
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
        marginBottom: dimen(30),

    },
    bottom_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsBold,
        color: colors.lightBlue,
        marginTop: dimen(30),
        textAlign: "center"
    }

})