import React, { useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/messaging';
import StackNavigation, { navigationRef } from './Src/Screens/Navigation/StackNavigation';
import { persistor, store } from './Src/Redux/Store';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { Strings } from './Src/Theme/Strings';


const App = (props) => {
  const [notiData,setNotiData]=useState("")
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {

   const language= Strings.setLanguage("English")
   console.log("language",language)
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);


  useEffect(() => {
    requestUserPermission();
    notification()
  }, []);

  async function requestUserPermission() {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        firebase
          .messaging()
          .getToken()
          .then(fcmToken => {
            console.log('fcm token:::::::', fcmToken);

          });
      } else {
        console.log('User denied notification permissions');
      }
    } catch (error) {
      console.error('Failed to request user permissions:', error);
    }
  }


  async function notification() {
    messaging()
      .getInitialNotification()
      .then(notificationOpen => {
        console.log(
          ' getInitialNotification:::::',
          'push notification',
          notificationOpen,
        );
      })
    //work when app is in forground mode
    messaging().onMessage(async remoteMessage => {
      console.log('remoteMessage 0 ', remoteMessage)
      console.log('remoteMessage.notification ', remoteMessage.notification)
      setNotiData(remoteMessage.notification)
      showMessage({
        position: 'top',
        description: remoteMessage?.data?.type == "ANNOUNCEMENT" ? remoteMessage?.notification.title : "",
        message:
          remoteMessage.notification.body ||
          remoteMessage.notification.title,
        type: 'success',
        duration: 2000,
        floating: false,
        backgroundColor: "#66A2AA",
        textStyle: { color: "white", }, // Limits title to one line
        titleStyle: { color: "white", },
        style: {
          alignItems: 'center',
          zIndex: 1000,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
         
        },
        hideOnPress: true,
        onPress: () => {
          
          try {
            navigationRef.navigate("Notification", { notificationData: remoteMessage.notification });
            console.log(notiData,"notiData")
          } catch (error) {
            console.error("Navigation error: ", error);
          }
        },
      });



    });
  }


  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </>

  );
};

export default App;

const styles = StyleSheet.create({});
