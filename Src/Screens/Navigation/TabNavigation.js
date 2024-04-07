import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../Components/Main';
import { Image, StyleSheet } from 'react-native';
import { images } from '../../Theme/Images';
import fonts from '../../Theme/Fonts';
import colors from '../../Theme/Colors';




const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { ...styles.tabContainer },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: fonts.PoppinsMedium,
        marginBottom: 20,
        color: colors.lightBlue
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
      <Tab.Screen name="Swap" component={Main}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={images.swap
              } />
          ),
        }}
      />
      <Tab.Screen name="Portfolio" component={Main}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={images.portfolioTab
              } />
          ),
        }}
      />
      <Tab.Screen name="Dapp" component={Main}
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={styles.bottomTabIcon} source={images.dapp } />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Main}
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