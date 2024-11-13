import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../Components/Main';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { images } from '../../Theme/Images';
import fonts from '../../Theme/Fonts';
import colors from '../../Theme/Colors';

import Settings from '../Components/Settings/Settings';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import Dapp from '../Components/Dapp/Dapp';
import Transactions from '../Components/Transactions/Transactions';
import Swap from '../Components/Swap/Swap';
import { useTheme } from '@react-navigation/native';
import Portfolio from '../Components/Portfolio/Portfolio';




const Tab = createBottomTabNavigator();

function TabNavigation() {
  const { colors: themeColor, image } = useTheme()
  return (

    <Tab.Navigator screenOptions={{

      headerShown: false,
      tabBarActiveTintColor: colors.lightBlue,
      tabBarInactiveTintColor: colors.greenText,
     
      tabBarStyle: [styles.tabContainer, { backgroundColor: themeColor.background,}],
      
      tabBarLabelStyle: {

        fontSize: dimen(12),
        fontFamily: fonts.PoppinsMedium,
        marginBottom: dimen(20),
      },

    }}


    >

      <Tab.Screen name="Dashboard" component={Main}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.bottomTabIcon , { tintColor: color }]}
              source={images.dashboard
              } />
          ),
          
        }}
      />
      <Tab.Screen name="Swap" component={Swap}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={[styles.bottomTabIcon , { tintColor: color }]}
              source={images.swap
              } />
          ),
        }}
      />
      <Tab.Screen name="Portfolio" component={Portfolio}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.bottomTabIcon , { tintColor: color }]}
              source={images.portfolioTab
              } />
          ),
        }}
      />
      <Tab.Screen name="Dapp" component={Dapp}
        options={{
          tabBarIcon: ({ color }) => (
            <Image 
            style={[styles.bottomTabIcon , { tintColor: color }]}
            source={images.dapp} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.bottomTabIcon , { tintColor: color }]}
              source={images.setting
              } />
          ),

        }}
      />

    </Tab.Navigator>

  );
}
export default TabNavigation
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueBackground,
    overflow: 'hidden',
  },
  bottomTabIcon: {
    height: 19,
    width: 19
  },
  tabContainer: {
    width: '100%',
    height: 82,
    backgroundColor: '#FCFDFF',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,



  },

})