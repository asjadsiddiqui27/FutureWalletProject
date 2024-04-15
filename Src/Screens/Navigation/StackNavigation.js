import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
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
import Main from '../Components/Main';
import Notification from '../Components/Notification';
import TabNavigation from './TabNavigation';
import BuyCrypto from '../Components/Buy&Sell/BuyCrypto';
import SellCrypto from '../Components/Buy&Sell/SellCrypto';
import Checkout from '../Components/Buy&Sell/Checkout';
import ManageWallets from '../Components/Buy&Sell/ManageWallets';
import Settings from '../Components/Settings/Settings';
import Receive from '../Components/Receive/Receive';
import Send from '../Components/Send/Send';
import Bitcoin from '../Components/Send/Bitcoin';
import Transfer from '../Components/Send/Transfer';
import DefaultTheme from '../../Theme/themes/DefaultTheme';
import DarkTheme from '../../Theme/themes/DarkTheme';
import { AppContext } from '../../Theme/themes/AppContext';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Preferences from '../Components/Settings/Preferences';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const appContext = useMemo(() => ({
    isDarkTheme,
    setIsDarkTheme,
  }), [isDarkTheme]);

  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const savedColorScheme = await AsyncStorage.getItem('colorScheme');
        if (savedColorScheme !== null) {
          setIsDarkTheme(savedColorScheme === 'dark');
        } else {

          const colorScheme = Appearance.getColorScheme();
          setIsDarkTheme(colorScheme === 'dark');
        }
      } catch (error) {
        console.error('Error loading color scheme from AsyncStorage:', error);
      }
    };

    loadColorScheme();
  }, []);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkTheme(colorScheme === 'dark');
    });

    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    const saveColorScheme = async () => {
      try {
        await AsyncStorage.setItem('colorScheme', isDarkTheme ? 'dark' : 'light');
      } catch (error) {
        console.error('Error saving color scheme to AsyncStorage:', error);
      }
    };

    saveColorScheme();
  }, [isDarkTheme]);
  const navigationRef = React.useRef(null);
  return (
    <NavigationContainer ref={navigationRef} theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <AppContext.Provider value={appContext}>
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
          <Stack.Screen
            name='TabNavigation'
            component={TabNavigation}
            options={{
            }}
          />
          <Stack.Screen
            name='Notification'
            component={Notification}
            options={{
            }}
          />

          <Stack.Screen
            name='BuyCrypto'
            component={BuyCrypto}
            options={{
            }}
          />

          <Stack.Screen
            name='SellCrypto'
            component={SellCrypto}
            options={{
            }}
          />

          <Stack.Screen
            name='Checkout'
            component={Checkout}
            options={{
            }}
          />
          <Stack.Screen
            name='ManageWallets'
            component={ManageWallets}
            options={{
            }}
          />
          <Stack.Screen
            name='Receive'
            component={Receive}
            options={{
            }}
          />
          <Stack.Screen
            name='Send'
            component={Send}
            options={{
            }}
          />


          <Stack.Screen
            name='Bitcoin'
            component={Bitcoin}
            options={{
            }}
          />
          {/* <Stack.Screen
          name='SendBtc'
          component={SendBtc}
          options={{
          }}
        /> */}
          <Stack.Screen
            name='Preferences'
            component={Preferences}
            options={{
            }}
          />

          <Stack.Screen
            name='Transfer'
            component={Transfer}
            options={{
            }}
          />



        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
