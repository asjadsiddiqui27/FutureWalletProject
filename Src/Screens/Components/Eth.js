import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import * as bip39 from 'bip39';
import {Buffer} from 'buffer';
import 'react-native-get-random-values';
import {randomBytes} from 'react-native-randombytes';
import {ethers} from 'ethers';
import Web3 from 'web3';

global.Buffer = Buffer;

const Practice = () => {
  const [words, setWords] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [gasPrice, setGasPrice] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  // const generateMnemonic = () => {
  //   try {
  //     const randm = randomBytes(16);
  //     const mnemonic = bip39.entropyToMnemonic(randm.toString('hex'));
  //     setWords(mnemonic);
  //   } catch (error) {
  //     console.error('Error generating mnemonic:', error);
  //   }
  // };
  // const generateSeed = () => {
  //   if (words) {
  //     try {
  //       const seed = bip39.mnemonicToSeedSync(words);
  //       setSeed(seed);
  //     } catch (error) {
  //       console.error('Error generating seed:', error);
  //     }
  //   } else {
  //     Alert.alert('Please generate mnemonic first');
  //   }
  // };
  // const generateEth = async () => {
  // if (words) {
  //   try {
  //     const wallet = ethers.Wallet.fromPhrase(words);
  //     setPrivateKey(wallet.privateKey);
  //     console.log('private keyy ------>', wallet.privateKey);
  //     setWalletAddress(wallet.address);
  //     console.log('wallet Address===========', wallet.address);
  //   } catch (error) {
  //     console.error('Error generating Ethereum wallet:', error);
  //     return;
  //   }
  // } else {
  //   Alert.alert('Please generate mnemonic first');
  //   return;
  // }
  //  };
  // useEffect(() => {
  //   fetchData();
  // }, [walletAddress]);
  const aasjadAddress = '0x329B4bAEC4c887c3E32a28070C1F9191e605cBce';
  const asjadPrivateKey =
    '0x2c74ed8b5cf87a57c81a2ce688f3cc0538884c0f9065710ec32169308199364d';

  const myAddress = '0x6cA55D3DF20077Df2D572d2e997d24F885BF13c3';
  const myPrivateKey =
    '0xb062f1a97040b8aef4f3e49ae22e7aca7e75ecc09990b11ff7e76a5e217b5127';
  const fetchData = async () => {
    // if (walletAddress) {
    try {
      const web3 = new Web3('wss://ethereum-sepolia-rpc.publicnode.com');
      // console.log('walletaddress', walletAddress);
      var balance = await web3.eth.getBalance(aasjadAddress);
      const etherBalance = ethers.formatEther(balance);
      console.log('mybalance------->', etherBalance);
      setBalance(etherBalance);

      var second = await web3.eth.getBalance(myAddress);
      const secondBalance = ethers.formatEther(second);
      console.log('secondbalance------->', secondBalance);
      // setBalance(etherBalance);

      var gas = await web3.eth.getGasPrice(aasjadAddress);
      var gasPrice = parseInt(gas, 16);
      console.log('gasPrice------->', gasPrice);
      setGasPrice(gasPrice);
      const nonceValue = await web3.eth.getTransactionCount(aasjadAddress);
      transaction; ///
      const transaction = {
        from: aasjadAddress,
        gasPrice: gasPrice,
        nonce: nonceValue,
        to: myAddress,
        value: web3.utils.toWei(0.010005357807298, 'ether'),
        chainId: 11155111,
        gasLimit: 21000,
      };
      await web3.eth.accounts
        .signTransaction(transaction, asjadPrivateKey)
        .then(res => {
          console.log('SignedTransaction', res);
          web3.eth
            .sendSignedTransaction(res.rawTransaction)
            .then(res1 => {
              console.log('SendTransaction :::::::', res1);
              // setLoader(!true);
              var balance = web3.eth.getBalance(aasjadAddress);
              const etherBalance = ethers.formatEther(balance);
              console.log('after-----mybalance------->', etherBalance);
              setBalance(etherBalance);

              var second = web3.eth.getBalance(myAddress);
              const secondBalance = ethers.formatEther(second);
              console.log(' After----secondbalance------->', secondBalance);
            })
            .catch(err => {
              console.log('SendTransaction err:::', err);
              // setLoader(!true);
            });
        })
        .catch(err => {
          console.log('SignedTransaction err::::', err);
          // setLoader(!true);
        });
    } catch (error) {
      console.error('Error creating Web3 instance:', error);
    }
    // else {
    //   null;
    // }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>Practice</Text>
      <View style={styles.container}>
        {/* <Text>Words: {words}</Text> */}
        {/* <Text>Wallet address: {walletAddress}</Text> */}
        <Text>Balance : {balance}</Text>
        <Text>Gas price : {gasPrice}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // flex: 0.2,
          marginBottom: 20,
          marginHorizontal: 10,
        }}>
        {/* <Button title="Generate Mnemonic" onPress={generateMnemonic} /> */}
        <Button title="Generate Wallet" onPress={fetchData} />
      </View>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 10,
    gap: 5,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});
