import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import ToggleSwitch from 'toggle-switch-react-native';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../Common/CustomHeader';
import { Strings } from '../../Theme/Strings';
import { images } from '../../Theme/Images';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';

const CELL_COUNT = 6;
const ConfirmPasscode = ({ navigation }) => {
  const { colors: themeColor, image } = useTheme();
  const pinInput = useRef(null);
  const [code, setCode] = useState('');

  const [switchToggle, setSwitchToggle] = useState(false);


  useEffect(() => {
    if (code.length === CELL_COUNT) {
      navigation.navigate("TabNavigation");
    }
  }, [code]);

  return (
    <SafeAreaView style={[styles.main_View, { backgroundColor: themeColor.background }]}>
      <View style={styles.main_container}>
        <CustomHeader
          header="Confirm Passcode"
          headerimg={{ tintColor: themeColor.text }}
          onPress={() => {
            navigation.navigate('setpasscode');
          }}
        />

        <View style={styles.body_container}>
          <Image source={images.welcomelogo} style={styles.img_style} />
          <Text style={[styles.createPassTxt, { color: themeColor.text }]}>
            {Strings.English.Passcode.ConfirmPasscode}
          </Text>
          <View style={styles.input_container}>
            <SmoothPinCodeInput
              ref={pinInput}
              value={code}
              codeLength={6}
              onTextChange={code => setCode(code)}
              cellStyle={{
                width: 30,
                borderBottomWidth: 2,
                borderColor: themeColor.text,
              }}
              cellStyleFocused={{
                borderColor: themeColor.subText,
              }}
              textStyle={{
                fontSize: 24,
                color: themeColor.text,
              }}

            />
          </View>
          <Text style={[styles.txt_style, { color: themeColor.text }]}>
            {Strings.English.Passcode.passcodeAddsSecurity}
          </Text>
        </View>


        <View style={styles.Footer_container}>
          <Image
            source={images.biometric_Blue}
            style={styles.imgBioMetric}
          />
          <View style={styles.biometricTxt_view}>
            <Text style={[styles.biometricTxt, { color: themeColor.text }]}>
              {Strings.English.Passcode.enableBiometric}
            </Text>
            <ToggleSwitch
              isOn={switchToggle}
              onColor={colors.background}
              offColor={colors.White}
              // onToggle={() => { toggleSwtich() }}
              trackOffStyle={{ borderWidth: 0.2 }}
              thumbOffStyle={{ backgroundColor: colors.background }}
            />
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default ConfirmPasscode;

const styles = StyleSheet.create({
  main_View: {
    flex: 1,
    backgroundColor: colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  main_container: {
    flex: 1,
    marginHorizontal: dimen(24),
  },
  body_container: {
    flex: 0.7,
    marginTop: dimen(145.65)
  },
  img_style: {
    width: dimen(88.75),
    height: dimen(88.75),
    alignSelf: "center",
    marginBottom: dimen(50.69)
  },
  createPassTxt: {
    fontSize: 16,
    fontFamily: fonts.PoppinsMedium,
    color: colors.Black,
    alignSelf: "center",
  },
  input_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: dimen(16),
    marginBottom: dimen(36.25)
  },
  txt_style: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: colors.topText
  },
  Footer_container: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative"
  },
  imgBioMetric: {
    height: dimen(79),
    width: dimen(79)
  },
  biometricTxt_view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: dimen(14),
    marginBottom: dimen(74),
  },
  biometricTxt: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 16,
    color: colors.Black,
    marginRight: dimen(10)
  },
  switch_style: {

  },
  btnView: {
    marginBottom: dimen(66.88),
  },
});
