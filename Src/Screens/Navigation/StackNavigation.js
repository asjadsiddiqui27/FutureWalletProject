import { StyleSheet, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WalletName from '../Components/WalletName';
import Onboarding from '../Components/Onboarding';
import Legal from '../Components/Legal';
import SecretPhrase from '../Components/SecretPhrase';
import VerifySecretPhrase from '../Components/VerifySecretPhrase';
import { Strings } from '../../Theme/Strings';
import SetPasscode from '../Components/SetPasscode';
import ImportWallet from '../Components/ImportWallet';
import ConfirmPasscode from '../Components/ConfirmPasscode';
import Notification from '../Components/Notification';
import TabNavigation from './TabNavigation';
import BuyCrypto from '../Components/Buy&Sell/BuyCrypto';
import SellCrypto from '../Components/Buy&Sell/SellCrypto';
import Checkout from '../Components/Buy&Sell/Checkout';
import ManageWallets from '../Components/Buy&Sell/ManageWallets';
import Receive from '../Components/Receive/Receive';
import Send from '../Components/Send/Send';
import Bitcoin from '../Components/Send/Bitcoin';
import Transfer from '../Components/Send/Transfer';
import Swap from '../Components/Swap/Swap';
import DefaultTheme from '../../Theme/themes/DefaultTheme';
import DarkTheme from '../../Theme/themes/DarkTheme';
import { AppContext } from '../../Theme/themes/AppContext';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TransferBnb from '../Components/Transactions/TransferBnb';
import PreviewSwap from '../Components/Swap/PreviewSwap';
import Chain from '../Components/Swap/Chain';
import SwapOnChain from '../Components/Swap/SwapOnChain';
import Bottomsheet from '../Components/Swap/Bottomsheet';
import AddressBook from '../Components/AddressBook/AddressBook';
import SwapFrom from '../Components/Swap/SwapFrom';
import SwapTo from '../Components/Swap/SwapTo';
import Watchlist from '../Components/Portfolio/Watchlist';
import NativeCurrency from '../Components/NativeCurrency/NativeCurrency';
import AddToWatchlist from '../Components/Portfolio/AddToWatchlist';
import SendBTC from '../Components/Send/SendBTC';
import AddNewContact from '../Components/AddressBook/AddNewContact';
import Wallet from '../Components/AddressBook/Wallet';
import CustomModal from '../Common/CustomModal';
import Security from '../Components/Security/Security';
import EnterPasscode from '../Components/Buy&Sell/EnterPasscode';
import Acknowledge from '../Components/Buy&Sell/Acknowledge';
import PrivateKeyBackup from '../Components/Buy&Sell/PrivateKeyBackup';
import SecretPhrase2 from '../Components/Buy&Sell/SecretPharse';
import ManageBottomSheet from '../Components/Buy&Sell/ManageBottomSheet';
import SendBnb from '../Components/Send/SendBnb';
import SendEth from '../Components/Send/SendEth';
import SendTrx from '../Components/Send/SendTrx';
import Transactions from '../Components/Transactions/Transactions';
import ReorderTokens from '../Components/Manage tokens/ReorderTokens';
import ManageTokens from '../Components/Manage tokens/ManageTokens';
import Transactions1 from '../Components/Manage tokens/Transactions1';
import Splash from '../Components/Onboarding/Splash';
import AddCustomToken from '../Components/Manage tokens/AddCustomToken';
import Processing from '../Components/Onboarding/Processing';
import CommonModal from '../Common/CommonModal';
import SendMatic from '../Components/Send/SendMatic';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = {
    isDarkTheme,
    setIsDarkTheme,
  };

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
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
            },
            headerShadowVisible: false,

            headerShown: false,
            // }
          }}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
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
            name='Processing'
            component={Processing}
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
            name='ReorderTokens'
            component={ReorderTokens}
            options={{
            }}
          />
          <Stack.Screen
            name='ManageTokens'
            component={ManageTokens}
            options={{
            }}
          />
          <Stack.Screen
            name='AddCustomToken'
            component={AddCustomToken}
            options={{
            }}
          />
          <Stack.Screen
            name='Transactions1'
            component={Transactions1}
            options={{
            }}
          />
           <Stack.Screen
            name='CommonModal'
            component={CommonModal}
            options={{
              title: "Set Passcode"
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
          <Stack.Screen
            name='SendBtc'
            component={SendBTC}
            options={{
            }}
          />
          <Stack.Screen
            name='SendEth'
            component={SendEth}
            options={{
            }}
          />
          <Stack.Screen
            name='SendTrx'
            component={SendTrx}
            options={{
            }}
          />
          <Stack.Screen
            name='SendBnb'
            component={SendBnb}
            options={{
            }}
          />
          <Stack.Screen
            name='SendMatic'
            component={SendMatic}
            options={{
            }}
          />

          <Stack.Screen
            name='Transfer'
            component={Transfer}
            options={{
            }}
          />


          <Stack.Screen
            name='Swap'
            component={Swap}
            options={{
            }}
          />

          <Stack.Screen
            name='TransferBnb'
            component={TransferBnb}
            options={{
            }}
          />

          <Stack.Screen
            name='PreviewSwap'
            component={PreviewSwap}
            options={{
            }}
          />
          <Stack.Screen
            name='Chain'
            component={Chain}
            options={{
            }}
          />

          <Stack.Screen
            name='SwapOnChain'
            component={SwapOnChain}
            options={{
            }}
          />
          <Stack.Screen
            name='Bottomsheet'
            component={Bottomsheet}
            options={{
            }}
          />
          <Stack.Screen
            name='AddressBook'
            component={AddressBook}
            options={{
            }}
          />

          <Stack.Screen
            name='SwapFrom'
            component={SwapFrom}
            options={{
            }}
          />
          <Stack.Screen
            name='SwapTo'
            component={SwapTo}
            options={{
            }}
          />
          <Stack.Screen
            name='Watchlist'
            component={Watchlist}
            options={{
            }}
          />
          <Stack.Screen
            name='NativeCurrency'
            component={NativeCurrency}
            options={{
            }}
          />
          <Stack.Screen
            name='AddToWatchlist'
            component={AddToWatchlist}
            options={{
            }}
          />
          <Stack.Screen
            name='AddNewContact'
            component={AddNewContact}
            options={{
            }}
          />
          <Stack.Screen
            name='Wallet'
            component={Wallet}
            options={{
            }}
          />
          <Stack.Screen
            name='CustomModal'
            component={CustomModal}
            options={{
            }}
          />

          <Stack.Screen
            name='Security'
            component={Security}
            options={{
            }}
          />

          <Stack.Screen
            name='EnterPasscode'
            component={EnterPasscode}
            options={{
            }}
          />

          <Stack.Screen
            name='Acknowledge'
            component={Acknowledge}
            options={{
            }}
          />
          <Stack.Screen
            name='PrivateKeyBackup'
            component={PrivateKeyBackup}
            options={{
            }}
          />
          <Stack.Screen
            name='SecretPhrase2'
            component={SecretPhrase2}
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
