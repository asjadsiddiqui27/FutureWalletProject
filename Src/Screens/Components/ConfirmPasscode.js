import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet,View, Image } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomHeader from '../Common/CustomHeader';
import { Strings } from '../../Theme/Strings';
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import Button from '../Common/CustomButton';
import { images } from '../../Theme/Images';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';



const CELL_COUNT = 6;

const ConfirmPasscode = (props) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.main_container}>

        <CustomHeader
          header={Strings.English.Passcode.ConfirmPasscode}
          onPress={() => { props.navigation.navigate("setpasscode") }}
        />

        <View style={styles.body_container}>
          <Image source={images.welcomelogo} style={styles.img_style} />
          <Text style={styles.createPassTxt}>{Strings.English.Passcode.ConfirmPasscode}</Text>
          <View style={styles.input_container}>
            {/* <CodeField
              ref={ref}
              {...prop}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
              testID="my-code-input"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            /> */}

          </View>
          <Text style={styles.txt_style}>{Strings.English.Passcode.passcodeAddsSecurity}</Text>
        </View>
        <View style={styles.Footer_container}>
          <Button onPress={() => { props.navigation.navigate("ConfirmPasscode") }} btnView={styles.btnView} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ConfirmPasscode;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    justifyContent: "flex-end"
},
btnView: {
    marginBottom: dimen(66.88),

},
  title:
  {
    textAlign: 'center',
    fontSize: 30
  },
  codeFieldRoot: {
    marginTop: 20

  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});