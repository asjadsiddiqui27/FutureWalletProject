import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { BlurView } from '@react-native-community/blur';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import colors from '../../Theme/Colors';
import { Strings } from '../../Theme/Strings';
import fonts from '../../Theme/Fonts';
import Button from '../Common/CustomButton';
import CustomBtnWIthIcon from '../Common/CustomButtonWithIcon';
import { images } from '../../Theme/Images';
import { wordsArray } from '../../Theme/Const';
import AfterTakingScreenshot from './AfterTakingScreenshot';
import CustomHeader from '../Common/CustomHeader';
import { SafeAreaView } from 'react-native';

const SecretPhrase = (props) => {
  const panelRef = useRef(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  console.log(wordsArray);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main_container}>
        <CustomHeader onPress={() => { props.navigation.navigate("walletname") }} header='Secret phrase' />

        <View style={styles.upper_View}>
          <View style={styles.text_heading_container}>
            <Text style={styles.text_main_heading}>
              {Strings.English.secretPhrase.writeDown}
            </Text>
          </View>

          <View style={styles.body_items_container}>
            {wordsArray.map((item, index) => (
              <Button
                key={index}
                btnView={styles.btnView}
                textColor={styles.btn_txt}
                text2_style={styles.btn_txt_2}
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
            main_View={styles.Btn_View}
            buttonStyle={styles.CopybtnStyle}
            ImgSrc={images.copyColored}
            LogoStyle={styles.copyLogo}
            textColor={styles.copyBtn_style}
            label={Strings.English.secretPhrase.copy}
          />
        </View>

        <View style={styles.Footer_Container}>
          <View style={styles.msg_container}>
            <Text style={styles.msg_txt}>
              {Strings.English.secretPhrase.doNotShare}
            </Text>
            <Text style={styles.msg_txt2}>
              {Strings.English.secretPhrase.futureWalletSupport}
            </Text>
          </View>

          <Button
            onPress={() => panelRef.current.togglePanel()}
            btnView={styles.footer_btn_view}
          />
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

      <AfterTakingScreenshot
        onOpen={() => setBottomSheetVisible(true)}
        onClose={() => setBottomSheetVisible(false)}
        panelRef={panelRef}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
};

export default SecretPhrase;

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
    color:colors.greenText,
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
    borderRadius: 12,
    paddingVertical: dimen(20),
    backgroundColor: colors.White,
    elevation: 2,
  },
  msg_txt: {
    textAlign: 'center',
    fontSize: 13.1,
    fontFamily: fonts.PoppinsMedium,
    lineHeight: dimen(24),
    marginBottom: dimen(12),
    color: colors.Black,
  },
  msg_txt2: {
    color: colors.Black,
    textAlign: 'center',
    fontSize: 13.1,
    fontFamily: fonts.PoppinsMedium,
    marginHorizontal: dimen(43),
    lineHeight: dimen(24),
  },
  footer_btn_view: {
    marginTop: dimen(32.21),
    marginBottom: dimen(66.88),
  },
});
