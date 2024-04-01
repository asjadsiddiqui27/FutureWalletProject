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

const Onboarding = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={{flex:1,marginHorizontal: 14, }}>
      <View style={{flex: 0.8}}>
        <View style={styles.imgContainer}>
          <Image style={styles.groupImg} source={images.telegram} />
        </View>
        <View style={styles.imgContainerText}>
          <Text style={styles.imgTextFirst}>{Strings.English.onboarding.safe}</Text>
          <Text style={styles.imgTextSecond}>
         {Strings.English.onboarding.aboutOur}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
      <View style={styles.insideFooter}>
        <Button onPress={()=>props.navigation.navigate("legal")} name={'Create a new wallet'} />
        <TouchableOpacity style={styles.alreadyAcc}>
          <Text style={styles.alreadyAccText}>I already have a wallet</Text>
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
    fontSize: 15.6,
    fontFamily:fonts.PoppinsMedium ,
    color: colors.subText,
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
