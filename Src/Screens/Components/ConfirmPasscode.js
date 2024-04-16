import { Image, Keyboard, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState, ref, useEffect } from 'react'
import colors from '../../Theme/Colors'
import Button from '../Common/CustomButton'
import { images } from '../../Theme/Images'
import InputText from '../Common/Input'
import { Strings } from '../../Theme/Strings'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import fonts from '../../Theme/Fonts'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomHeader from '../Common/CustomHeader';
import ToggleSwitch from 'toggle-switch-react-native';

const CELL_COUNT = 6;

const ConfirmPasscode = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [switchToggle, setSwitchToggle] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const toggleSwtich = () => {
    setSwitchToggle(!switchToggle);
    if(!switchToggle){
    navigation.navigate("TabNavigation")
  }
}

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.main_View}>
      <View style={styles.main_container}>
        <CustomHeader
          header="Confirm Passcode"
          onPress={() => {
            navigation.navigate('setpasscode');
          }}
        />

        <View style={styles.body_container}>
          <Image source={images.welcomelogo} style={styles.img_style} />
          <Text style={styles.createPassTxt}>
            {Strings.English.Passcode.ConfirmPasscode}
          </Text>
          <View style={styles.input_container}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete={
                Platform.select({
                  android: 'sms-otp',
                  default: 'one-time-code',
                })
              }
              testID="my-code-input"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[
                    styles.cell,
                    isFocused && styles.focusCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          <Text style={styles.txt_style}>
            {Strings.English.Passcode.passcodeAddsSecurity}
          </Text>
        </View>

        {!keyboardOpen && (
          <View style={styles.Footer_container}>
            <Image
              source={images.biometric_Blue}
              style={styles.imgBioMetric}
            />
            <View style={styles.biometricTxt_view}>
              <Text style={styles.biometricTxt}>
                {Strings.English.Passcode.enableBiometric}
              </Text>
              <ToggleSwitch
                isOn={switchToggle}
                onColor={colors.background}
                offColor={colors.White}
                onToggle={() => { toggleSwtich() }}
                trackOffStyle={{ borderWidth: 0.2 }}
                thumbOffStyle={{ backgroundColor: colors.background }}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}





export default ConfirmPasscode

const styles = StyleSheet.create({
  focusCell:{
//  backgroundColor:"blue"
  },
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
  cell: {
    width: dimen(20.5),
    height: dimen(42.21),
    lineHeight: 38,
    fontSize: 16,
    borderBottomWidth: 2,
    borderColor: colors.border_input,
    textAlign: 'center',
    marginRight: dimen(18.5),
  
  },
  pass_input: {
    padding: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    textAlign: "center",
    borderColor: colors.border_input
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
    position:"relative"
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

})