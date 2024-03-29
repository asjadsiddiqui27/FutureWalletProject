import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WalletName from '../Components/WalletName';
import Onboarding from '../Components/Onboarding';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
          },
          headerShadowVisible: false,
          headerTitleStyle: {
          }
        }}>


        <Stack.Screen
          name='onboarding'
          component={Onboarding}
        // options={{ headerShown: false }}
        />

        <Stack.Screen
          name='walletname'
          component={WalletName}
        // options={{ headerShown: false }}
        />








































      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
