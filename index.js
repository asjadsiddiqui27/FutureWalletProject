/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';
import Notification from './Src/Screens/Components/Notification';
import Main from './Src/Screens/Components/Main';
import Practice from './Src/Screens/Components/Practice';
import './shim';
import BtcAddress from './Src/Screens/Components/BtcAddress';
const TextEncodingPolyfill = require('text-encoding');

Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});
AppRegistry.registerComponent(appName, () => BtcAddress);
