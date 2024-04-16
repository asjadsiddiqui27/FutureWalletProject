import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import images from '../../Theme/Images';
import colors from '../../Theme/Colors';
import {getDimensionPercentage as dimen} from '../../Utils/Utils';
import Button from '../Common/CustomButton';
import fonts from '../../Theme/Fonts';
import { Strings } from '../../Theme/Strings';
import { images } from '../../Theme/Images';
import { useTheme } from '@react-navigation/native';


const Onboarding = (props) => {
  const {colors: themeColor} = useTheme()

  return (
    <SafeAreaView style={[styles.safeArea,{backgroundColor:themeColor.background}]}>
        <View style={{flex:1,marginHorizontal: 14, }}>
      
      <View style={{flex: 0.8,gap:dimen(10)}}>
        <View style={styles.imgContainer}>
          <Image style={styles.groupImg} source={images.group} />
        </View>
        <View style={styles.imgContainerText}>
          <Text style={[styles.imgTextFirst,{color:themeColor.imgTextFirst}]}>{Strings.English.onboarding.safe}</Text>
          <Text style={styles.imgTextSecond}>
         {Strings.English.onboarding.aboutOur}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
      <View style={styles.insideFooter}>
        <Button  name={'Create a new wallet'} onPress={()=>props.navigation.navigate("legal")}/>
        <TouchableOpacity style={styles.alreadyAcc} >
          <Text style={styles.alreadyAccText}>{Strings.English.onboarding.alreadyWallet}</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor:colors.White,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  groupImg: {
    width: dimen(278.14),
    height: dimen(251.13),
  },
  imgContainer: {
    marginTop: dimen(115),
    alignItems: 'center',
  },
  imgContainerText: {
    alignItems: 'center',
    gap: 12.4,
  },
  imgTextFirst: {
    fontSize: 24,
    fontFamily:fonts.PoppinsBold ,
    color: colors.Black,
  },
  imgTextSecond: {
    fontSize: dimen(16),
    fontFamily:fonts.PoppinsMedium ,
    color: colors.subText,
    // fontFamily:"Poppins-Medium"\
  },
  footer: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  alreadyAcc: {
    alignItems: 'center',
  },
  alreadyAccText:{
    color:colors.lightBlue,
    fontSize:16,
    fontFamily:fonts.PoppinsBold ,
  },
  insideFooter: {
    gap: 24.65,
    marginBottom: 80,
  },
});
export default Onboarding;
