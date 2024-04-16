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




const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
  
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.lightBlue,
      tabBarInactiveTintColor:colors.greenText,
      tabBarStyle: { ...styles.tabContainer },
      tabBarLabelStyle: {

        fontSize: dimen(12),
        fontFamily: fonts.PoppinsMedium,
        marginBottom: dimen(20),
      },
     
    }}


    >
 
      <Tab.Screen name="Dashboard" component={Main}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={images.dashboard
              } />
          ),
        }}
      />
      <Tab.Screen name="Swap" component={Swap}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={images.swap
              } />
          ),
        }}
      />
      <Tab.Screen name="Portfolio" component={Transactions}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={images.portfolioTab
              } />
          ),
        }}
      />
      <Tab.Screen name="Dapp" component={Dapp}
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={styles.bottomTabIcon} source={images.dapp} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
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