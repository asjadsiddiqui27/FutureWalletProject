import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import images from '../../Theme/Images';
import colors from '../../Theme/Colors';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 0.8}}>

          <View style={styles.imgContainer}>
            <Image style={styles.groupImg} source={images.group} />
          </View>
          <View style={styles.imgContainerText}>
            <Text style={styles.imgTextFirst}>Safe and Protected</Text>
            <Text style={styles.imgTextSecond}>Trust our crypto wallet for security and protection. </Text>
          </View>
 
      </View>

      <View style={{flex: 0.2}}>
        <Text>create new</Text>
        <Text>i already have a wallet</Text>
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
    width: 278.14,
    height: 251.13,
  },
  imgContainer: {
    marginTop: 115,
    alignItems: 'center',
  },
  imgContainerText:{
    alignItems:'center'
  },
  imgTextFirst:{
    fontSize:24,
    fontWeight:'700',
    color:colors.Black
  },
  imgTextSecond:{
    fontSize:16,
    color:colors.subText
  }
});
export default Onboarding;
