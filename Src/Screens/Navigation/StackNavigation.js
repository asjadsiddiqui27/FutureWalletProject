import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WalletName from '../Components/WalletName';
import Onboarding from '../Components/Onboarding';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';
import Legal from '../Components/Legal';
import SecretPhrase from '../Components/SecretPhrase';
import VerifySecretPhrase from '../Components/VerifySecretPhrase';
import { Strings } from '../../Theme/Strings';
import SetPasscode from '../Components/SetPasscode';
import ImportWallet from '../Components/ImportWallet';
import ConfirmPasscode from '../Components/ConfirmPasscode';
import AfterTakingScreenshot from '../Components/AfterTakingScreenshot';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const navigationRef = React.useRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor:"yellow"
          },
          headerShadowVisible: false,
          // headerTitleAlign: 'center',
          // headerTitleStyle: {
          //   color: colors.Black,
          //   fontFamily: fonts.PoppinsBold
          headerShown: false,
          // }
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
            headerShown: false
          }}
        />

        <Stack.Screen
          name="walletname"
          component={WalletName}
          options={{
            headerShown: false
          }}
        />


        <Stack.Screen
          name="secretphrase"
          component={SecretPhrase}
          options={{
            title: Strings.English.secretPhrase.secretPhrase,
          }}
        />

        <Stack.Screen
          name="verifysecretphrase"
          component={VerifySecretPhrase}
          options={{

            headerShown: false
          }}
        />

        <Stack.Screen
          name='ImportWallet'
          component={ImportWallet}
          options={{

            headerShown: false
          }}
        />

        <Stack.Screen
          name='setpasscode'
          component={SetPasscode}
          options={{
            title: "Set Passcode"
          }}
        />

        <Stack.Screen
          name='ConfirmPasscode'
          component={ConfirmPasscode}
          options={{
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
