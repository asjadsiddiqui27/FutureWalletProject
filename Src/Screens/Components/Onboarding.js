import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '../../Theme/Images';
import colors from '../../Theme/Colors';
import {getDimensionPercentage as dimen} from '../../Utils/Utils';
import Button from '../Common/CustomButton';
import fonts from '../../Theme/Fonts';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 0.8}}>
        <View style={styles.imgContainer}>
          <Image style={styles.groupImg} source={images.group} />
        </View>
        <View style={styles.imgContainerText}>
          <Text style={styles.imgTextFirst}>Safe and Protected</Text>
          <Text style={styles.imgTextSecond}>
            Trust our crypto wallet for security and protection.{' '}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button name={'Create a new wallet'} />
        <TouchableOpacity style={styles.alreadyAcc}>
          <Text style={styles.alreadyAccText}>I already have a wallet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginHorizontal: 14,
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
    fontWeight: '700',
    color: colors.Black,

  },
  imgTextSecond: {
    fontSize: 16,
    color: colors.subText,
  },
  footer:{
    flex: 0.2,
    gap:24.65
  },
  alreadyAcc:{
    alignItems:'center'
  },
  alreadyAccText:{
    color:colors.lightBlue,
    fontWeight:'700',
    fontSize:16,
    fontFamily:fonts.mulish 

  }
});
export default Onboarding;
