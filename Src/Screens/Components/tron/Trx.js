import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
const TronWeb = require('tronweb');
const Trx = () => {
  const [balance, setBalance] = useState(null);

  const tronWeb = new TronWeb({
    fullHost: 'https://api.nileex.io/',
    headers: {'TRON-PRO-API-KEY': '7a0482ca-c331-4b50-9080-7619700f57d9'},
    // privateKey: 'your private key'
  });
  //   const tronwallet = tronWeb.fromMnemonic(
  //     'slam ugly move dream vanish congress accuse royal rug kind rigid scan',
  //   );
  //   console.log('tronWeb data ::::::::::', tronwallet);
  //   console.log(tronWeb);
  const address = 'TQZmVUBprq1dHSXBZxDgBysX4MQo1UofBR';

  const sendTrx = async () => {
    const transaction = await tronWeb.transactionBuilder.sendTrx(
      'TP3kGWFhP44c1T8fjXeBrxspKM38ViW9cx',
      100 * 1000000,
      'TQZmVUBprq1dHSXBZxDgBysX4MQo1UofBR',
    );
    console.log({transaction});
    const signedtxn = await tronWeb.trx.sign(
      transaction,
      'a45c2b481f47eb6e36ff8a71349a89da9414b7797edd194822ecf124bb4c2b0b',
    );
    console.log('signedtxn>>>>>>>>>.', signedtxn);
    const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
    console.log('recipt>>>>>>>>', receipt);
    const bal = await tronWeb.trx.getBalance(address);
    setBalance(bal / 10 ** 6);
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
      <View>
        <Text>TRX Transaction</Text>
        <Text>Balance :{balance}</Text>
      </View>
      <Button title="Send Trx" onPress={sendTrx} />
    </View>
  );
};

export default Trx;

const styles = StyleSheet.create({});
