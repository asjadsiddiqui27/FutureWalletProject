/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';

AppRegistry.registerComponent(appName, () => StackNavigation);
