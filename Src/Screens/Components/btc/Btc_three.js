import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrivateKey} from 'bitcore-lib';

const privateKey = PrivateKey(
  'b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79',
  'testnet',
);
const publicKey = privateKey.toPublicKey();
console.log('hvxhvghc---', privateKey);
//const address = publicKey.toAddress();
console.log({publicKey});
const myAddress = privateKey.toAddress('testnet', 'pubkeyhash');
console.log(myAddress);
// console.log('Public Key:', publicKey.toString());
// console.log('Address:', address.toString());

const Btc_three = () => {
  //   const bitcore = require('bitcore-lib');
  //   const privateKey = new bitcore();
  //   console.log(bitcore);
  return (
    <View>
      <Text>Btc_three</Text>
    </View>
  );
};

export default Btc_three;

const styles = StyleSheet.create({});
