/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Onboarding from './Src/Screens/Components/Onboarding';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';

AppRegistry.registerComponent(appName, () => StackNavigation);
