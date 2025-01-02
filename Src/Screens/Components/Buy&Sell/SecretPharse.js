import {
  Clipboard,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { Strings } from '../../../Theme/Strings';
import Button from '../../Common/CustomButton';
import CustomBtnWIthIcon from '../../Common/CustomButtonWithIcon';
import CustomHeader from '../../Common/CustomHeader';
import SmallButton from '../../Common/CustomSmallButton';
// import { wordsArray } from '../../../Theme/Const';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const SecretPhrase2 = (props) => {
  const { colors: themeColor, image } = useTheme()
  const panelRef = useRef(null);
  // const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [mnemonics, setMnemonics] = useState("")
  useEffect(() => {
    const getUser = async () => {
      try {
        const mnemonicResult = JSON.parse(await AsyncStorage.getItem("mnemonicResult"));
        console.log(" get mnemonicResult:::::::::::::", mnemonicResult);
        setMnemonics(mnemonicResult);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);


  const handleCopy = () => {

    Clipboard.setString(mnemonics);
    console.log("copied data>>>>>>>>>>>>>>>>>> ", mnemonics)
    showMessage({
      message: 'Data copied',
      backgroundColor: "#00BEF2",
      autoHide: true,
      duration: 2000,
      type: 'success',
      position: 'top',
    });
    // console.log("After showMessage");
  };
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: themeColor.background }]}>
      <View style={styles.main_container}>
        <CustomHeader onPress={() => { props.navigation.navigate("ManageWallets") }} headerimg={{ tintColor: themeColor.text }} header=' Backup Secret phrase' />

        <View style={styles.upper_View}>
          <View style={styles.text_heading_container}>
            <Text style={[styles.text_main_heading, { color: themeColor.subText }]}>
              {Strings.secretPhrase.writeDown}
            </Text>
          </View>

          <View style={styles.body_items_container}>
            {mnemonics.split(" ").map((item, index) => (
              <SmallButton

                key={index}
                btnView={[styles.btnView, { backgroundColor: themeColor.cardBackground, borderColor: themeColor.cardBackground }]}
                textColor={[styles.btn_txt, { color: themeColor.text }]}
                text2_style={[styles.btn_txt_2, { color: themeColor.text }]}
                name_2={index + 1 + '.'}
                buttonStyle={styles.btn_style}
                name={item}
                onPress={() => {
                  console.log(item);
                }}
              />
            ))}
          </View>

          <CustomBtnWIthIcon
            onPressFun={handleCopy}
            main_View={styles.Btn_View}
            buttonStyle={[styles.CopybtnStyle, { backgroundColor: themeColor.cardBackground }]}
            ImgSrc={image.copyIcon}
            LogoStyle={styles.copyLogo}
            textColor={styles.copyBtn_style}
            label={Strings.secretPhrase.copy}
          />
        </View>

        <View style={styles.Footer_Container}>
          <View style={[styles.msg_container, { backgroundColor: themeColor.background, borderColor: themeColor.cardBackground }]}>
            <Text style={[styles.msg_txt, { color: themeColor.text }]}>
              {Strings.secretPhrase.doNotShare}
            </Text>
            <Text style={[styles.msg_txt2, { color: themeColor.text }]}>
              {Strings.secretPhrase.futureWalletSupport}
            </Text>
          </View>

          <Button
            name='Back'
            onPress={() => { props.navigation.navigate("ManageWallets") }}
            btnView={styles.footer_btn_view}
          />
        </View>
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default SecretPhrase2;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.White,
  },
  main_container: {
    flex: 1,
    marginHorizontal: dimen(24),
  },
  upper_View: {
    flex: 0.7,
  },
  text_heading_container: {
    alignItems: 'center',
    marginTop: dimen(16),
  },
  text_main_heading: {
    fontSize: dimen(16),
    fontFamily: fonts.PoppinsMedium,
    color: colors.greenText,
    lineHeight: 24,
    textAlign: 'center',
  },
  body_items_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: dimen(22),
  },
  btnView: {
    height: dimen(40),
    width: dimen(88),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLineColor,
    backgroundColor: colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimen(6),
  },
  btn_style: {
    flexDirection: 'row',
  },
  btn_txt: {
    fontSize: 13,
    color: colors.Black,
    fontFamily: fonts.PoppinsMedium,
  },
  btn_txt_2: {
    fontSize: 13,
    color: colors.topText,
    fontFamily: fonts.PoppinsMedium,
  },
  Btn_View: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimen(25),
  },
  CopybtnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimen(13),
    borderWidth: 1,
    borderColor: colors.background,
    borderRadius: 12,
  },
  copyLogo: {
    width: dimen(24),
    height: dimen(24),
  },
  copyBtn_style: {
    color: colors.background,
    fontSize: 15,
    fontFamily: fonts.PoppinsBold,
  },
  Footer_Container: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  msg_container: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: dimen(20),
    backgroundColor: colors.White,
    elevation: 2,
  },
  msg_txt: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    lineHeight: dimen(24),
    marginBottom: dimen(12),
    color: colors.Black,
  },
  msg_txt2: {
    color: colors.Black,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    marginHorizontal: dimen(43),
    lineHeight: dimen(24),
  },
  footer_btn_view: {
    marginTop: dimen(32.21),
    marginBottom: dimen(66.88),
  },
});
