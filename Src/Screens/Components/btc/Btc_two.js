import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {randomBytes} from 'react-native-randombytes';
import * as bip39 from 'bip39';
import bs58 from 'bs58';
const bitcore = require('bitcore-lib');
const Insight = require('bitcore-insight').Insight;
const BIP84 = require('bip84');
let insight = new Insight('testnet');
const Btc_two = () => {
  const [balance, setBalance] = useState(0);
  // const generateMnemonic = async () => {
  //   try {
  //     const randm = randomBytes(16);
  //     const mnemonic = bip39.entropyToMnemonic(randm.toString('hex'));
  //     console.log('mnemonics------>', mnemonic);
  //     // private key//
  //     var root = new BIP84.fromMnemonic(mnemonic, '', true);
  //     const privateKey = root.getRootPrivateKey(0);
  //     console.log('private key--', privateKey);
  //     // setPrivateKey(privateKey);
  //     // address //
  //     var child0 = root.deriveAccount(0);
  //     var account0 = new BIP84.fromZPrv(child0);
  //     console.log('account0-->', account0.getAccountPrivateKey());
  //     const bitcoinAddress = account0.getAddress(0);
  //     console.log({bitcoinAddress});
  //     // setWords(bitcoinAddress);

  //     // *********************************************************************** //
  //     // const root = new BIP84.fromMnemonic(mnemonic, '', true);
  //     // console.log('root>>>>>>>>>>>>>>>>>>>>>>>>>', root);
  //     // const child0 = root.deriveAccount(0);
  //     // const account0 = new BIP84.fromZPrv(child0);
  //     // console.log('accountData>>>>>>>>>>>>>>>>>>>>>>>>>', account0);
  //     // // ::::::::::::::::::::::::::::::Generate Bitcoin  Address :::::::::::::::::::::::::::::::::::::://

  //     // const bitcoinAddress = account0.getAddress(0);
  //     // console.log('bitcoinAddress:::::::::::::::::::::::::', bitcoinAddress);

  //     // const bitcoinPrivateKey = account0.getAccountPrivateKey();
  //     // console.log('bitcoinPrivateKey:::::::::::::::::::', bitcoinPrivateKey);
  //   } catch (error) {
  //     console.error('Error generating mnemonic:', error);
  //   }
  // };
  const myAddress = 'tb1qhfn288ctws6x82nyuh9vs7yhp0gz2vlcqmp0wq';
  const addressTo = 'tb1qkxpcl3q7470nnq9a2wy454kzm9jrp2um02ytjp';
  const fee = 20000;
  const amount = 30000;
  const pk =
    'vprv9DMUxX4ShgxMLRvZtngH3kZ8eP251scjNTUNfUsQFTF1wU76aoW3w4NsR5wjgTjy9MgmmKfy2runwVSYEQMkfQCxFR5uRxy1S2cjD39xBio';
  useEffect(() => {
    const fetchBitcoinBalance = async address => {
      try {
        const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`;
        const response = await axios.get(url);
        const data = response;
        console.log('api Data------>', data);
        const btcBalance = data.final_balance;
        const calculatedBalance = btcBalance / 100000000;
        setBalance(calculatedBalance);
      } catch (error) {
        if (error.response) {
          console.error('Error:', error.response.data);
        } else {
          console.error('Error:', error.message);
        }
        setBalance(0);
      }
    };
    fetchBitcoinBalance('tb1qhfn288ctws6x82nyuh9vs7yhp0gz2vlcqmp0wq');
    // axios
    //   .post('https://api.blockcypher.com/v1/btc/test3/addrs')
    //   .then(response => {
    //     console.log('response------>', response.data);
    //   })
    //   .catch(err => {
    //     console.log('response------>', err);
    //   });
  }, []);
  insight.getUtxos(myAddress, (err, utxos) => {
    if (err) {
      //Handle errors
      return err;
    } else {
      // use the UTXOs to create transaction with bitcore Transaction object
      let tx = bitcore.Transaction();
      tx.from(utxos);
      tx.to(addressTo, amount);
      tx.change(myAddress);
      tx.fee(fee);
      tx.sign(privateKey);
      tx.serialize();
      // Broadcast your transaction to the Bitcoin network
      insight.broadcast(tx.toString(), (error, txid) => {
        if (error) {
          return error;
        } else {
          // Your Transaction Id
          console.log(txid);
        }
      });
    }
  });
  return (
    <View style={styles.container}>
      <Text>My Bitcoin Balance:</Text>
      {/* <Button title="mnemonics" onPress={generateMnemonic} /> */}
      <Text>{balance.toFixed(8)} BTC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Btc_two;
