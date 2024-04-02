import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomHeader from '../Common/CustomHeader';


const CELL_COUNT = 6;

const ConfirmPasscode = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
         <CustomHeader onPress={()=>{navigation.navigate("verifysecretphrase")}}  header='Import Wallet'/>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default ConfirmPasscode;

const styles = StyleSheet.create({
    root: {
        flex: 1,
         padding: 20
    },
    title: 
    {
        textAlign: 'center',
     fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20
    
    },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderBottomWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
  });