/**
 * @format
 */
import {AppRegistry, Text,TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './Src/Screens/Navigation/StackNavigation';
import { setCustomText } from 'react-native-global-props';
import fonts from './Src/Theme/Fonts';
import React from 'react';

// const customTextProps = { 
//     style: { 
//       fontFamily: fonts.PoppinsMedium
//     }
//   }

//  setCustomText(customTextProps);
let oldRender = Text.render;
Text.render = function (...args) {
    let origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
        style: [{color: 'red', fontFamily: fonts.PoppinsMedium}, origin.props.style]
    });
};
AppRegistry.registerComponent(appName, () => StackNavigation);
