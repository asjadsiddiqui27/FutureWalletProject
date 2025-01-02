import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React from 'react'
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import colors from '../../../Theme/Colors';
import SeperateLine from '../../Common/SeperateLine';
import { Strings } from '../../../Theme/Strings';
import fonts from '../../../Theme/Fonts';
import { Image } from 'react-native';
import { images } from '../../../Theme/Images';
import CommonImgTxtRow from './CommonImgTxtRow';
import CardRow from '../Send/CardRow';
import Button from '../../Common/CustomButton';


const PreviewSwap = (props) => {
  const { colors: themeColor, image } = useTheme()
  return (
    <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

      <CustomHeader header="Swap" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Swap") }}/>
      <SeperateLine />

      <View style={{flex:0.8}}>
        <Text style={[styles.top_text, { color: themeColor.text }]}>{Strings.Swap.reviewTransaction}</Text>
        <View style={{ marginHorizontal: dimen(24) }}>
          <View style={styles.mainContent_view}>
            <Image source={image.downTransfer} style={styles.image_style} />
            <CommonImgTxtRow imagedata={images.notification2} label={Strings.Swap.BnbValue2} />
            <CommonImgTxtRow imagedata={images.busd} label={Strings.Swap.ValueBUSD} />

          </View>

          <View style={[styles.row_data_view, { backgroundColor: themeColor.cardBackground }]}>
            <CardRow text1={Strings.Swap.From} text2={Strings.Swap.fromData} />
            <SeperateLine top_line={styles.top_line} />
            <CardRow text1={Strings.Swap.To} text2={Strings.Swap.toData} />

          </View>

          <View style={[styles.row_data_view, { backgroundColor: themeColor.cardBackground }]}>
            <CardRow text1={Strings.Swap.Provider} text2={Strings.Swap.providerData} />
            <SeperateLine top_line={styles.top_line} />
            <CardRow text1={Strings.Swap.networkFees} text2={Strings.Swap.networkFee2} />

          </View>
        </View>
      </View>


      <View style={styles.btn_view}>
        <Button name='Confirm' />
      </View>

    </SafeAreaView>
  )
}

export default PreviewSwap

const styles = StyleSheet.create({

  main_container: {
    flex: 1,
    backgroundColor: colors.White
  },
  header: {
    marginHorizontal: dimen(21)
  },
  top_text: {
    fontSize: dimen(18),
    fontFamily: fonts.PoppinsBold,
    marginTop: dimen(29),
    marginLeft: dimen(22)
  },
  mainContent_view: {

    gap: 20,
    marginTop: dimen(16)
  },
  image_style: {
    position: "absolute",
    bottom: dimen(70),
    right: dimen(25)
  },
  row_data_view: {
    height: dimen(118),
    borderRadius: 12,
    marginTop: dimen(20)
  },
  top_line: {
    marginTop: dimen(19)
  },
  btn_view: {
    marginHorizontal: dimen(24),
    flex: 0.2
  }
})