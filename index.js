/**
 * @format
 */
import {AppRegistry, Settings} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';
import Notification from './Src/Screens/Components/Notification';
import Main from './Src/Screens/Components/Main';
import ConfirmPasscode from './Src/Screens/Components/ConfirmPasscode';
import SendBTC from './Src/Screens/Components/Send/SendBTC';
import Setting from './Src/Screens/Components/Settings/Settings';
import Preferences from './Src/Screens/Components/Settings/Preferences';
// import SendBTC from './Src/Screens/Components/Send/SendBTC';

AppRegistry.registerComponent(appName, () => StackNavigation);
