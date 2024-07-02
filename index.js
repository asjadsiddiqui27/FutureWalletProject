/**
 * @format
 */
import {AppRegistry, Settings} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import './Src/Screens/Common/Shim'
import 'react-native-get-random-values';  

const TextEncodingPolyfill = require('text-encoding');


Object.assign(global, {
    TextEncoder: TextEncodingPolyfill.TextEncoder,
    TextDecoder: TextEncodingPolyfill.TextDecoder,
   
});
AppRegistry.registerComponent(appName, () =>App);
