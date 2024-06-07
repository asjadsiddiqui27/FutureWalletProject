/**
 * @format
 */
import {AppRegistry, Settings} from 'react-native';

import {name as appName} from './app.json';
import App from './App';
import '../FutureWalletProject/Src/Screens/Common/Shim';

AppRegistry.registerComponent(appName, () =>App);
