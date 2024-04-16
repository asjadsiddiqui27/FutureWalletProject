import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../Theme/Colors'
import { Strings } from '../../Theme/Strings'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import InputText from '../Common/Input'
import Button from '../Common/CustomButton'
import fonts from '../../Theme/Fonts'
import CustomHeader from '../Common/CustomHeader'
import { useTheme } from '@react-navigation/native';

import { useTheme } from '@react-navigation/native';


const WalletName = (props) => {
  const {colors: themeColor, image} = useTheme()
    const [name, setName] = useState('')
    const {colors: themeColor, image} = useTheme()

    return (
      

    <SafeAreaView style={[styles.main_container,{backgroundColor:themeColor.background}]}>
      <View style={styles.container}>
      <CustomHeader onPress={()=>{props.navigation.navigate("legal")}}  header='Wallet Name'/>
      <View style={styles.heading_container}>
      <Text onPress={()=>{props.navigation.navigate("secretphrase")}} style={[styles.heading_text_style,{color:themeColor.SubText}]}>{Strings.English.walletName.youCanlable}</Text>
      </View>

      <View style={styles.Input_main_container}>
        <Text style={[styles.name_label_name,{color:themeColor.SubText}]}>
          {Strings.English.walletName.enterName}
        </Text>
        <InputText maximumLength={25} value={name} onChngFunction={setName} />
        <Text style={styles.max_limit_txt_style}>
          {Strings.English.walletName.maxLimit + name.length + '/25'}
        </Text>
      </View>

      <View style={styles.footer_container}>
        <Button
          name={'Continue'}
          
         onPress={()=>props.navigation.navigate("secretphrase")}
          buttonStyle={styles.btn}
        />
      </View>
    </View>
    </SafeAreaView>

  );
};

export default WalletName;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor:colors.White ,
    flex: 1,
  },
  container:{
    flex:1,
    marginHorizontal:dimen(24)
  },
  heading_container: {
    marginHorizontal: dimen(27.5),
    marginTop: dimen(16),
  },
  heading_text_style: {
    fontSize: dimen(16),
    lineHeight: dimen(24),
    textAlign: 'center',
    color:colors.greenText
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
  },
  btn: {
    height: 50,
    width: 'auto',
    // marginHorizontal: 24,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: dimen(66.88),
  },
});
