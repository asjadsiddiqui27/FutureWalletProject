import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';



export default function AfterTakingScreenshot() {
  const panelRef = useRef(null);
  

  
  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Your content</Text>
      </View>

   
      <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <BottomSheet ref={panelRef}>
        <Text style={{paddingVertical: 20}}>Some random content</Text>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({});
