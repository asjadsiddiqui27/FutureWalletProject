import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../Theme/Colors';
import CustomHeader from '../Common/CustomHeader';
import {getDimensionPercentage as dimen} from '../../Utils/Utils';
import {images} from '../../Theme/Images';
const Main = props => {
  return (
    <View style={styles.main_container}>
      <CustomHeader
        header="My Wallet 2"
        header_style={styles.header}
        imgLeft={images.welcomelogo}
        imgRight={images.bell}
        headerimg={styles.headerimg_style}
        onPress2={() => {
          props.navigation.navigate('Notification');
        }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  header: {
    marginHorizontal: dimen(24),
  },
  headerimg_style: {
    height: dimen(30),
    width: dimen(30),
  },
});
