import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../Common/CustomButton';
import {getDimensionPercentage as dimen} from '../../Utils/Utils';
import colors from '../../Theme/Colors';
import CheckBox from '@react-native-community/checkbox';
import {images} from '../../Theme/Images';
import fonts from '../../Theme/Fonts';

const Legal = props => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.main_Container}>
      <View style={styles.main_view1}>
        <View style={styles.top_text_View}>
          <Text style={styles.top_text}>
            Please review the Future Wallet terms of service and privacy policy
          </Text>
        </View>

        <View style={styles.middle_view}>
          <View
            style={{
              top: dimen(26),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.textcolor,
                fontSize: 16,
                fontWeight: '500',
              }}>
              Privacy Policy
            </Text>
            <TouchableOpacity>
              <Image source={images.greaterthan} style={styles.img} />
            </TouchableOpacity>
          </View>

          <View style={styles.Line} />

          <View
            style={{
              top: dimen(60),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.textcolor,
                fontSize: 16,
                fontWeight: '500',
              }}>
              Terms of Service
            </Text>
            <TouchableOpacity>
              <Image source={images.greaterthan} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.main_view2}>
        <View style={styles.insideMain_View2}>
          <View style={styles.bottom_text_View}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              tintColors={{true: '#00BEF2', false: '#00BEF2'}}
            />
            
            <Text style={styles.bottom_text}>
              I've read and accept the terms of service and privacy policy
            </Text>
            
          </View>

          <View>
            <Button
              onPress={() => {
                props.navigation.navigate('walletname');
              }}
              name="Continue"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Legal;

const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  main_view1: {
    flex: 0.72,
    marginHorizontal: dimen(24),
  },
  top_text_View: {
    height: dimen(48),
    top: dimen(16),
  },
  top_text: {
    fontSize: 16,
    lineHeight: dimen(24),
    color: colors.topText,
    fontWeight: '500',
    textAlign: 'center',
  },

  middle_view: {
    top: dimen(60),
    height: dimen(123),
    borderColor: colors.borderColor,
    borderWidth: dimen(1),
    borderRadius: dimen(12),
    paddingHorizontal: dimen(15),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
  },
  img: {
    height: dimen(20),
    width: dimen(20),
  },
  Line: {
    borderWidth: 0.5,
    top: dimen(40),
    borderColor: colors.borderColor,
    // marginHorizontal:dimen(15)
  },

  // footer //

  main_view2: {
    flex: 0.28,
    marginHorizontal: dimen(24),
    justifyContent: 'flex-end',
  },
  bottom_text_View: {
    height: dimen(48),
    flexDirection: 'row',
  },

//   checkbox: {},
  bottom_text: {
    fontSize: 16,
    // fontWeight: '500',
    fontFamily:fonts.PoppinsMedium,
    color: colors.textcolor,
    lineHeight: dimen(24),
  },
  insideMain_View2:{
    marginBottom: 66.88, 
    gap: 36.07
  }
  
});
