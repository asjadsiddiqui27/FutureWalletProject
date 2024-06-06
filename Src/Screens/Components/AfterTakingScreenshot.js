import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {images} from '../../Theme/Images';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';
import {getDimensionPercentage as dimen} from '../../Utils/Utils';
import HorizontalLine from '../Common/HorizontalLine';
import Button from '../Common/CustomButton';
import { Strings } from '../../Theme/Strings';
import { useTheme } from '@react-navigation/native';

//  after taking screenshot //
const height = Dimensions.get('window').height;

export default function AfterTakingScreenshot(props) {
  const {colors: themeColor, image} = useTheme()
  const {navigation} = props;
  return (
    <BottomSheet
      ref={props.panelRef}
      isOpen={false}
      sliderMinHeight={0}
      sliderMaxHeight={height/1.18}
      onOpen={props.onOpen}
      onClose={props.onClose}
      wrapperStyle={{backgroundColor:themeColor.card}}
    
      >
        <ScrollView>
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.main_first}>
            <Image style={styles.img_vector} source={image.bottomsheetIcon} />
            <Text style={[styles.text_warn,{color:themeColor.text}]}>
            {Strings.English.afterTakingScreenshot.naverShare}
            </Text>
          </View>

          <View style={styles.pharse}>
            
            <View style={styles.aboutPharse_1}>
              <View style={styles.inside_aboutPharse}>
                <View style={styles.ellipse} />
              </View>

              <View>
                <Text style={[styles.aboutPharse_text,{color:themeColor.text}]}>
                 {Strings.English.afterTakingScreenshot.line_1}
                </Text>
              </View>
            </View>

            <HorizontalLine
              color={colors.Black}
              width={0.5}
              widthHr={'100%'}
              marginVertical={15}
            />

            <View style={styles.aboutPharse_2}>
              <View style={styles.inside_aboutPharse}>
                <View style={styles.ellipse} />
              </View>

              <View>
              <Text style={[styles.aboutPharse_text,{color:themeColor.text}]}>
                {Strings.English.afterTakingScreenshot.line_2}
                </Text>
              </View>
            </View>
            <HorizontalLine
              color={colors.Black}
              width={0.5}
              widthHr={'100%'}
              marginVertical={15}
            />

            <View style={styles.aboutPharse}>
              <View style={styles.inside_aboutPharse}>
                <View style={styles.ellipse} />
              </View>

              <View>
              <Text style={[styles.aboutPharse_text,{color:themeColor.text}]}>
                {Strings.English.afterTakingScreenshot.line_3}
                </Text>
              </View>
            </View>
            <HorizontalLine
              color={colors.Black}
              width={0.5}
              widthHr={'100%'}
              marginVertical={15}
            />

            <View style={styles.aboutPharse_4}>
              <View style={styles.inside_aboutPharse}>
                <View style={styles.ellipse} />
              </View>

              <View>
              <Text style={[styles.aboutPharse_text,{color:themeColor.text}]}>
                {Strings.English.afterTakingScreenshot.line_4}
                </Text>
              </View>
            </View>
            <HorizontalLine
              color={colors.Black}
              width={0.5}
              widthHr={'100%'}
              marginVertical={15}
            />

            <View style={styles.aboutPharsesec}>
              <View style={styles.inside_aboutPharse2}>
                <Image style={styles.img_vectorSec} source={images.vector} />
              </View>

              <View>
                <Text style={styles.aboutPharse_text2}>
                {Strings.English.afterTakingScreenshot.line_5}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      </ScrollView>
      <View style={styles.mainfooter}>
        <Button
          name="Continue"
          onPress={() => navigation.navigate('verifysecretphrase')}
          buttonStyl={styles.btn}
          textColor={styles.btnText}
        />
      </View>
     
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: dimen(375),
    marginBottom: 33,
    
  },
  mainHeader: {
    flex: 0.8,
  },
  mainfooter: {
    flex: 0.2,
    // backgroundColor: 'red',
    flexDirection: 'flex-end',
    marginBottom: 66.88,
  },
  main_first: {
    alignItems: 'center',
    gap: 12.21,
  },
  img_vector: {
    height: 101,
    width: 105,
  },
  img_vectorSec: {
    height: 18,
    width: 19,
    resizeMode: 'contain',
    marginTop: 4,
  },
  text_warn: {
    fontSize: dimen(17.9),
    letterSpacing: -dimen(0.2),
    color: colors.Black,
    // fontWeight:"700",
    fontFamily: fonts.PoppinsBold,
    width: dimen(267),
    // height:37,
    flexWrap:"wrap",
    textAlign: 'center',
    lineHeight: 22,
  },
  ellipse: {
    height: 6,
    width: 6,
    backgroundColor: colors.lightBlue,
    borderRadius: 50,
    marginTop: 9,
  },
  pharse: {
    marginTop: 32.52,
  },
  aboutPharse: {
    flexDirection: 'row',
    gap: 9,
    width:dimen(375.42),
    // height:76
  },
  aboutPharse_1:{
    flexDirection: 'row',
    gap: 9,
    // width:dimen(375.42),
    // height:76
  },
  aboutPharse_2:{
    flexDirection: 'row',
    gap: 9,
    // width:dimen(375.42),
    // height:76
  },
  aboutPharse_4:{
    flexDirection: 'row',
    gap: 9,
    // width:dimen(375.42),
    // height:76
  },
  aboutPharsesec: {
    flexDirection: 'row',
    gap:4
  },
  inside_aboutPharse: {
    width: dimen(7),
  },
  inside_aboutPharse2: {
    width: dimen(18),
  },

  aboutPharse_text: {
    color: colors.Black,
    lineHeight: 22,
    fontSize: dimen(14),
    letterSpacing: -dimen(0.2),
    fontFamily: fonts.PoppinsMedium,
    maxWidth: dimen(360), //
    // textAlign: 'left', //
    // alignSelf: 'center', //
  },
  aboutPharse_text2: {
    color: colors.lightBlue,
    lineHeight: 22,
    fontSize: dimen(14),
    letterSpacing: -dimen(0.2),
    fontFamily: fonts.PoppinsMedium,
    maxWidth: dimen(355),
  },
});
