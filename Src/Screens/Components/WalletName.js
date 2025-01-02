import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import InputText from '../Common/Input';
import Button from '../Common/CustomButton';
import CustomHeader from '../Common/CustomHeader';
import { Strings } from '../../Theme/Strings';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import { useDispatch } from 'react-redux';
import { setWalletName } from '../../Redux/Actions/DataAction';

const WalletName = (props) => {
  const { colors: themeColor } = useTheme();
  const [name, setName] = useState('');
  const dispatch = useDispatch();
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
  
    props.navigation.navigate("secretphrase");
  };

  return (
    <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
      <View style={styles.container}>
        <CustomHeader onPress={() => { props.navigation.navigate("legal") }} header='Wallet Name' headerimg={{ tintColor: themeColor.text }} />
        <View style={styles.heading_container}>
          <Text style={[styles.heading_text_style, { color: themeColor.subText }]}>{Strings.walletName.youCanlable}</Text>
        </View>

        <View style={styles.Input_main_container}>
          <Text style={[styles.name_label_name, { color: themeColor.subText }]}>
            {Strings.walletName.enterName}
          </Text>
          <InputText maximumLength={25} value={name} onChngFunction={handleSetValue} placeholderText='Enter here' />
          <Text style={styles.max_limit_txt_style}>
            {Strings.walletName.maxLimit + name.length + '/25'}
          </Text>
        </View>

        <View style={styles.footer_container}>
          <Button
            name={'Continue'}
            onPress={handlePress}
            // buttonStyle={styles.btn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletName;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors.White,
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: dimen(24)
  },
  heading_container: {
    marginHorizontal: dimen(27.5),
    marginTop: dimen(16),
  },
  heading_text_style: {
    fontSize: dimen(16),
    lineHeight: dimen(24),
    textAlign: 'center',
    color: colors.greenText
  },
  Input_main_container: {
    flex: 0.8,
    marginTop: dimen(32.98),
  },
  name_label_name: {
    marginBottom: dimen(12.33),
  },
  max_limit_txt_style: {
    fontSize: 14,
    marginTop: dimen(12.86),
    textAlign: 'right',
    color: colors.background,
  },
  footer_container: {
    flex: 0.2,
    justifyContent: 'flex-end',
    marginBottom: dimen(66.88),
  },
  btn: {
    // height: 50,
    // width: 'auto',
    // backgroundColor: colors.background,
    // borderRadius: 12,
    // marginBottom: dimen(66.88),
  },
});
