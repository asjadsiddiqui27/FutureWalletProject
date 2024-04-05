import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../Components/Main';



const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
       
      }}>
      <Tab.Screen name="Main" component={Main} />
     
    </Tab.Navigator>
  );
}
export default TabNavigation