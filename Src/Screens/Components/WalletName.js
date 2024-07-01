import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../Theme/Colors';
import {Strings} from '../../Theme/Strings';
import {getDimensionPercentage as dimen} from '../../Utils/Utils';
import InputText from '../Common/Input';
import Button from '../Common/CustomButton';
import fonts from '../../Theme/Fonts';
import CustomHeader from '../Common/CustomHeader';
import * as bip39 from 'bip39';
import {Buffer} from 'buffer';
import {randomBytes} from 'react-native-randombytes';

global.Buffer = Buffer;

const WalletName = props => {
  const [name, setName] = useState('');
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTextInput = text => {
    console.log(text);
    const validInput = text.replace(/[^a-zA-Z0-9]/g, '');
    setName(validInput);
  };
  // random words //
  const generateMnemonic = async () => {
    try {
      setLoading(true);
      const randm = await randomBytes(16);
      const mnemonic = bip39.entropyToMnemonic(randm);
      const wordArray = mnemonic.split(' ');
      console.log(wordArray);
      // setWords(wordArray);
      if (!name == '') {
        await props.navigation.navigate('secretphrase', {
          name: name,
          word: wordArray,
        });
        setName('');
      } else {
        Alert.alert('Please enter your name');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error generating mnemonic:', error);
    }
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        {loading == true ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <>
            <CustomHeader
              onPress={() => {
                props.navigation.goBack();
              }}
              header="Wallet Name"
            />
            <View style={styles.heading_container}>
              <Text style={styles.heading_text_style}>
                {Strings.English.walletName.youCanlable}
              </Text>
            </View>

            <View style={styles.Input_main_container}>
              <Text style={styles.name_label_name}>
                {Strings.English.walletName.enterName}
              </Text>
              <InputText
                maximumLength={25}
                value={name}
                onChngFunction={text => handleTextInput(text)}
              />
              <Text style={styles.max_limit_txt_style}>
                {Strings.English.walletName.maxLimit + name.length + '/25'}
              </Text>
            </View>
            <View style={styles.footer_container}>
              <Button
                name={'Continue'}
                // onPress={()=>props.navigation.navigate("secretphrase")}
                onPress={() => generateMnemonic()}
                buttonStyle={styles.btn}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default WalletName;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors.White,
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: dimen(24),
  },
  heading_container: {
    marginHorizontal: dimen(27.5),
    marginTop: dimen(16),
  },
  heading_text_style: {
    fontSize: 15,
    lineHeight: dimen(24),
    textAlign: 'center',
  },
  Input_main_container: {
    flex: 0.8,
    marginTop: dimen(32.98),
  },
  name_label_name: {
    marginBottom: dimen(12.33),
  },
  max_limit_txt_style: {
    fontSize: 14,
    marginTop: dimen(12.86),
    textAlign: 'right',
    color: colors.background,
  },
  footer_container: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  btn: {
    height: 50,
    width: 'auto',
    // marginHorizontal: 24,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: dimen(66.88),
  },
});
