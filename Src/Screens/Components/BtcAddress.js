import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {randomBytes} from 'react-native-randombytes';
import * as bip39 from 'bip39';
import axios from 'axios';

const BtcAddress = () => {
  const BIP84 = require('bip84');
  const [address, setAddress] = useState();
  const [privateKey, setPrivateKey] = useState();
  const [recipientAddress, setRecipientAddress] = useState(
    'bc1qn4p6al7wk0wrd3trm885czqz6yhjc9a2kswnxg',
  );
  const [amountToSend, setAmountToSend] = useState('0.0001');
  const generateMnemonic = async () => {
    try {
      const randm = randomBytes(16);
      const mnemonic = bip39.entropyToMnemonic(randm.toString('hex'));
      // private key//
      var root = new BIP84.fromMnemonic(mnemonic);
      const privateKey = root.getRootPrivateKey();
      console.log('private key--', privateKey);
      setPrivateKey(privateKey);
      // address //
      var child0 = root.deriveAccount(0);
      var account0 = new BIP84.fromZPrv(child0);
      const bitcoinAddress = account0.getAddress(0);
      console.log({bitcoinAddress});
      setWords(bitcoinAddress);
    } catch (error) {
      console.error('Error generating mnemonic:', error);
    }
  };
  const sendBitcoin = async () => {
    try {
      const sochain_network = 'BTCTEST';
      const privateKey =
        'zprvAWgYBBk7JR8GjhgmRuaQXsUGiESdgnx6bnMmevfAuSg6yUyk8BCfnw1ar3hrhvEJ65N31tbezo3PnQaEauwKC7eBhymPkwTD7etC6hAy5xy'; // Your private key
      const sourceAddress = 'bc1qg3dy7uhunamjjfhje2jnga85j565l5a8dsqsex'; // Your Bitcoin address
      const satoshiToSend = amountToSend * 100000000;
      let fee = 0;
      let inputCount = 0;
      let outputCount = 2;
      console.log('hjkbcdhjkbdcdbcdjbcdjc');
      // Fetch UTXOs (Unspent Transaction Outputs) from Sochain API
      const response = await axios.get(
        `https://api.blockcypher.com/v1/btc/main/addrs/${sourceAddress}`,
      );
      console.log('hjvjhvhhffbfgl------', JSON.stringify(response.data));
      const utxos = response.data.data.txs;
      console.log('hascghasvahc--->>>>>>>>');
      // Prepare inputs for the transaction
      let inputs = [];
      let totalAmountAvailable = 0;

      for (const utxo of utxos) {
        let input = {};
        input.satoshis = Math.floor(Number(utxo.value) * 100000000);
        input.script = utxo.script_hex;
        input.address = response.data.data.address;
        input.txId = utxo.txid;
        input.outputIndex = utxo.output_no;
        totalAmountAvailable += input.satoshis;
        inputCount += 1;
        inputs.push(input);
      }
      console.log('chkdkldldsdsdsdd--------------->');
      // Calculate transaction size and fee (assuming 20 satoshis per byte)
      const transactionSize =
        inputCount * 146 + outputCount * 34 + 10 - inputCount;
      fee = transactionSize * 20;

      // Check if there are enough funds to cover the transaction and fee
      if (totalAmountAvailable - satoshiToSend - fee < 0) {
        throw new Error('Insufficient balance for this transaction');
      }

      // Create a new Bitcoin transaction using bitcore-lib
      const transaction = new bitcoin.Transaction();

      // Set transaction inputs
      transaction.from(inputs);

      // Set recipient address and amount to send
      transaction.to(recipientAddress, satoshiToSend);

      // Set change address (where the remaining funds go after the transaction)
      transaction.change(sourceAddress);

      // Manually set transaction fee
      transaction.fee(fee);

      // Sign transaction with your private key
      for (let i = 0; i < inputCount; i++) {
        transaction.sign(i, bitcoin.PrivateKey.fromWIF(privateKey));
      }

      // Serialize transaction
      const serializedTransaction = transaction.serialize();

      // Send transaction to Sochain API
      const result = await axios.post(
        `https://sochain.com/api/v2/send_tx/${sochain_network}`,
        {
          tx_hex: serializedTransaction,
        },
      );

      console.log('Transaction sent:', result.data.data);
      Alert.alert('Success', 'Transaction sent successfully!');
    } catch (error) {
      console.error('Error sending transaction:', error);
      Alert.alert('Error', 'Failed to send transaction. Please try again.');
    }
  };
  return (
    <View>
      <Text>BtcAddress</Text>
      {/* <Button onPress={generateMnemonic} title="Generate mnemonics" /> */}
      <Text>{privateKey}</Text>
      <Text>{address}</Text>
      <Button title="send btc" onPress={sendBitcoin} />
    </View>
  );
};

export default BtcAddress;

const styles = StyleSheet.create({});
