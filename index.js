/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';
import AfterTakingScreenshot from './Src/Screens/Components/AfterTakingScreenshot';

AppRegistry.registerComponent(appName, () => AfterTakingScreenshot);
