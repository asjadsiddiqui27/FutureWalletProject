/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';
import Notification from './Src/Screens/Components/Notification';
import Main from './Src/Screens/Components/Main';

AppRegistry.registerComponent(appName, () => StackNavigation);
