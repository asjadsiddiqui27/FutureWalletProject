import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ImgTxtTxt = ({
  txt1,
  txt2,
  imgSrc,
  main_container ,
  ImageStyle ,
  txt1_style ,
  txt2_style ,
}) => {
  return (
    <View style={main_container}>
      {imgSrc && <Image style={ImageStyle} source={imgSrc} />}
      <Text style={[txt1_style]}>{txt1}</Text>
      <Text style={txt2_style}>{txt2}</Text>
    </View>
  );
};

export default ImgTxtTxt;


