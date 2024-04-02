import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WalletName from '../Components/WalletName';
import Onboarding from '../Components/Onboarding';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';
import Legal from '../Components/Legal';
import SecretPhrase from '../Components/SecretPhrase';
import VerifySecretPhrase from '../Components/VerifySecretPhrase';
import {Strings} from '../../Theme/Strings';
import AfterTakingScreenshot from '../Components/AfterTakingScreenshot';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor:"yellow"
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.Black,
            fontFamily: fonts.PoppinsBold,
          },
        }}>
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="legal"
          component={Legal}
          options={{
            title: 'Legal',
          }}
        />

        <Stack.Screen
          name="walletname"
          component={WalletName}
          options={{
            title: Strings.English.walletName.walletName,
          }}
        />

        <Stack.Screen
          name="afterTakingScreenshot"
          component={AfterTakingScreenshot}
          options={{
            title: 'AfterTakingScreenshot',
          }}
        />

        <Stack.Screen
          name="verifysecretphrase"
          component={VerifySecretPhrase}
          options={{
            title: 'Verify Secret Phrase',
          }}
        />
        
        <Stack.Screen
          name="secretphrase"
          component={SecretPhrase}
          options={{
            title: Strings.English.secretPhrase.secretPhrase,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
