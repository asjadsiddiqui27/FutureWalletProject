import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const Splash = (props) => {
  const { colors: themeColor, image } = useTheme();
  useEffect(() => {

    const delay = 5000;

 
    const timeout = setTimeout(() => {
      props.navigation.navigate('onboarding'); 
    }, delay);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColor.background }]}>
      <StatusBar backgroundColor={themeColor.background}  barStyle="dark-content" />
      <View style={styles.animationContainer}>
      
          <LottieView
            style={styles.animation}
            source={image.splash}
            autoPlay
            loop={false}
          />
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
