import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useRef } from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { images } from '../../Theme/Images';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import HorizontalLine from '../Common/HorizontalLine';
import Button from '../Common/CustomButton';
import { Strings } from '../../Theme/Strings';
import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import SeperateLine from '../Common/SeperateLine';

//  after taking screenshot //
const height = Dimensions.get('window').height;

export default function AfterTakingScreenshot(props) {
  const { colors: themeColor, image } = useTheme()
  const { navigation } = props;

  const data = [
    { id: '1', text: Strings.English.afterTakingScreenshot.line_1 },
    { id: '2', text: Strings.English.afterTakingScreenshot.line_2 },
    { id: '3', text: Strings.English.afterTakingScreenshot.line_3 },
    { id: '4', text: Strings.English.afterTakingScreenshot.line_4 },
    { id: '5', text: Strings.English.afterTakingScreenshot.line_5, imageSource: images.vector },

  ];


  const renderItem = ({ item }) => (
    <View style={styles.pharse}>
      <View style={styles.aboutPharse_1}>
        <View style={styles.inside_aboutPharse}>
          {item.id == 5 ?
            <Image source={item.imageSource} style={styles.img_vectorSec} /> :
            <View style={styles.ellipse} />
          }
        </View>

        <View>
          {item.id == 5 ? <Text style={[styles.aboutPharse_text2, ]}>{item.text} </Text> :
            <Text style={[styles.aboutPharse_text, { color: themeColor.text }]}>{item.text}</Text>}
        </View>
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={props.panelRef}
      isOpen={false}
      sliderMinHeight={0}
      sliderMaxHeight={height / 1.18}
      onOpen={props.onOpen}
      onClose={props.onClose}
      wrapperStyle={{ backgroundColor: themeColor.card }}

    >

      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.main_first}>
            <LottieView
              style={styles.animation}
              source={images.alertSecretAnim}
              autoPlay
              loop
            />
            {/* <Image style={styles.img_vector} source={image.bottomsheetIcon} /> */}
            <Text style={[styles.text_warn, { color: themeColor.text }]}>
              {Strings.English.afterTakingScreenshot.naverShare}
            </Text>
          </View>
          <FlatList
            data={data}
            ItemSeparatorComponent={() => (
              <View style={styles.SeperateLine_view}>
                <SeperateLine />
              </View>
            )}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
           {/* <View style={styles.mainfooter}> */}
        <Button
          name="Continue"
          onPress={props.onNavigate}
          buttonStyl={styles.btn}
          textColor={styles.btnText}
        />
      {/* </View> */}
        </View>
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
    fontFamily: fonts.PoppinsBold,
    width: dimen(267),
    flexWrap: "wrap",
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
  aboutPharse: {
    flexDirection: 'row',
    gap: 9,
    width: dimen(375.42),

  },
  aboutPharse_1: {
    flexDirection: 'row',
    gap: 9,
    paddingVertical:dimen(10)
  },
  aboutPharsesec: {
    flexDirection: 'row',
    gap: 4
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
  animation: {
    width: dimen(122),
    height: dimen(122),
  },
});
