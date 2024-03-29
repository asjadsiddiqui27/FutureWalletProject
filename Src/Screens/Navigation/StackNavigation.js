<<<<<<< HEAD
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
=======
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
>>>>>>> origin/Branch_Three
import WalletName from '../Components/WalletName';
import Onboarding from '../Components/Onboarding';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';


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
            color:colors.Black,
            fontFamily:fonts.PoppinsBold
          }
        }}>


        <Stack.Screen
          name='onboarding'
          component={Onboarding}
          options={{ 
         
            headerShown:false
           }}
        />

        <Stack.Screen
          name='walletname'
          component={WalletName}
        options={{ 
          title:"Wallet Name"
         }}
        />








































      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
