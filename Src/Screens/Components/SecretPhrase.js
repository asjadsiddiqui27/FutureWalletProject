import {
  Clipboard,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import CustomBtnWIthIcon from '../Common/CustomButtonWithIcon';
import AfterTakingScreenshot from './AfterTakingScreenshot';
import React, { useState, useRef, useEffect } from 'react';
import { BlurView } from '@react-native-community/blur';
import { ActivityIndicator } from 'react-native';
import SmallButton from '../Common/CustomSmallButton';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../Common/CustomHeader';
import { Strings } from '../../Theme/Strings';
import { SafeAreaView } from 'react-native';
import Button from '../Common/CustomButton';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';
import { Buffer } from "buffer";
import * as bip39 from 'bip39'
import FlashMessage, { showMessage } from "react-native-flash-message";
import 'react-native-get-random-values'
import { Wallet, ethers } from "ethers"
import Web3 from 'web3';
import axios from 'axios';
const BIP84 = require('bip84');
import { setMnemonicResult, setEthBalance, setBnbBalance, setMaticBalance, setBtcBalance, setPrivateKey, setBitcoinTestnetAddress, setPrivateKeyBtcWIF, setTronBalance, setTronKey, setFromAddress } from '../../Redux/Actions/DataAction';
import { tronWeb } from '../../Utils/Utils';
import { useDispatch } from 'react-redux';
var crypto = require('react-native-crypto');
global.Buffer = Buffer;

const SecretPhrase = (props) => {
  const panelRef = useRef(null);
  const { colors: themeColor, image } = useTheme()
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [loading, setLoading] = useState(true)
  const [mnemonic, setMnemonic] = useState([]);
  const [balance, setBalance] = useState("")
  const dispatch = useDispatch();
  const fromPrivateKey = "0x3eca96d4f6fb83f72407dc2d851bce12c650a4711cfd112ebd8edc4589cacce3"
  const fromAddress = "0x7e8592c8feb55394D26bd7653588C4Ecf8C7DB64"
  const ethTestnetSpolia = "https://ethereum-sepolia-rpc.publicnode.com"
  const bnbTestnetSpolia = "https://bsc-testnet-rpc.publicnode.com"
  const bitcoinTestnetAddress = "tb1q7dewlwrlwr5qsq06pst4jdv4r6h29l97chxeye"
  const privateKeyBtcWIF = 'cRz8xdZQdJ7oWEuE5dB2tKTH6vAw2FjDn8hnj1k4E1gkrCtgYr4j';
  const fromPrivateKeyTron = "8A4B3F5A33D5D4DBDF0403C3791DC00AFCA26CC43A5A0F13A277256ED5D32D3B"

  useEffect(() => {
    generateData()

  }, [])

  const generateData = async () => {

    const mnemonicResult =
      "goat random canoe wide build share please health normal sphere pattern equip"
    // bip39.generateMnemonic();

    console.log('Mnemonic::::::', mnemonicResult);
    const arrNemonics = mnemonicResult?.trim().split(" ")
    setMnemonic(arrNemonics)
    setLoading(false)
    const seed = bip39.mnemonicToSeedSync(mnemonicResult);
    console.log('Seed:::::::::::::', seed.toString('hex'))

    const root = new BIP84.fromMnemonic(mnemonicResult, "", true);
    console.log("root>>>>>>>>>>>>>>>>>>>>>>>>>", root);
    const child0 = root.deriveAccount(0);
    const account0 = new BIP84.fromZPrv(child0);
    console.log("accountData>>>>>>>>>>>>>>>>>>>>>>>>>", account0);
    dispatch(setMnemonicResult(mnemonicResult));


    // ::::::::::::::::::::::::::::::Generate Tron  Address :::::::::::::::::::::::::::::::::::::://
    const tronwallet = tronWeb.fromMnemonic(mnemonicResult)
    console.log("tronWeb data ::::::::::", tronwallet);
    // console.log("tronWeb data ::::::::::", tronWeb.createAccount());
    const tronBalnce = await tronWeb.trx.getBalance("TGPwRY1H8wLigVQ65AyMiW3b1nUFo7pZLd");
    const formatTronBalance = tronBalnce / 10 ** 6
    console.log("tronBalnce:::::", formatTronBalance)
    setBalance(formatTronBalance);
    dispatch(setTronBalance(formatTronBalance));
    console.log("TronPrivateKey:::::::::::", tronwallet.privateKey);

    const tronKey = tronwallet.privateKey
    setTronKey
    dispatch(setTronKey(tronKey));
    // ::::::::::::::::::::::::::::::Generate Bitcoin  Address :::::::::::::::::::::::::::::::::::::://


    const bitcoinAddress = account0.getAddress(0);
    console.log("bitcoinAddress:::::::::::::::::::::::::", bitcoinAddress);

    const bitcoinPrivateKey = account0.getAccountPrivateKey();
    console.log("bitcoinPrivateKey:::::::::::::::::::", bitcoinPrivateKey);

    // ::::::::::::::::::::::::::::::Generate Eth Bnb Matic Address :::::::::::::::::::::::::::::::::::::://

    const wallet = Wallet.fromPhrase(mnemonicResult);
    console.log("PrivateKey:::::::::::", wallet.privateKey);
    console.log("waletAddress:::::::::", wallet.address)
    console.log({ wallet })

    //::::::::::::::::::::::::::::::::::: Get Balance ::::::::::::::::::::::::::::::::::://
   
    // ;:::::::::::Eth balance::::::::::::: //
    const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');
    const balance = await web3.eth.getBalance(fromAddress);
    const etherBalance = ethers.formatEther(balance)
    const formattedBalance = parseFloat(etherBalance).toFixed(5);
    console.log("eth Balance:::::::::", formattedBalance);
    // setBalance(etherBalance)
    dispatch(setEthBalance(formattedBalance));

    // ;:::::::::::Bnb balance::::::::::::: //
    const Bnbweb3 = new Web3('https://bsc-testnet-rpc.publicnode.com');
    const bnbBalance = await Bnbweb3.eth.getBalance(fromAddress);
    const formtBalance = ethers.formatEther(bnbBalance)
    const formattedBnbBalance = parseFloat(formtBalance).toFixed(5);
    console.log("Bnb Balance:::::::::", formattedBnbBalance);
    setBalance(formattedBnbBalance)
    dispatch(setBnbBalance(formattedBnbBalance));

    // ;:::::::::: Matic balance::::::::::::: //
    const Maticweb3 = new Web3('https://rpc-amoy.polygon.technology/');
    const maticBalance = await Maticweb3.eth.getBalance("0xD28F085D324A0e15A2Ac929435a0598f95efc517");
    const formtmaticBalance = ethers.formatEther(maticBalance)
    const afterformattedBnbBalance = parseFloat(formtmaticBalance).toFixed(5);
    console.log("matic  Balance:::::::::", afterformattedBnbBalance);
    setBalance(afterformattedBnbBalance)
    dispatch(setMaticBalance(afterformattedBnbBalance));
    
    const maticBalance2 = await Maticweb3.eth.getBalance("0x7e8592c8feb55394D26bd7653588C4Ecf8C7DB64");
    const formtmaticBalance2 = ethers.formatEther(maticBalance2)
    const afterformattedBnbBalance2 = parseFloat(formtmaticBalance2).toFixed(5);
    console.log("matic  Balance22222222:::::::::", afterformattedBnbBalance2);

    // ;:::::::::::Btc balance::::::::::::: /

    const fetchBitcoinBalance = async (address) => {
      try {
        const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`;
        console.log("Request URL:", url);
        const response = await axios.get(url);
        const data = response.data;
        console.log("API Response Data   ***********************************", data);
        const btcBalance = data.final_balance;
        return btcBalance / 100000000;
      } catch (error) {
        if (error.response) {
          console.error('Error response data:', error.response.data);
        } else {
          console.error('Error message:', error.message);
        }
        return 0;
      }

    };


    const bitcoinBalance = await fetchBitcoinBalance("tb1q7dewlwrlwr5qsq06pst4jdv4r6h29l97chxeye");
    console.log("Bitcoin Balance:::::::::", bitcoinBalance);
    setBalance(bitcoinBalance);
    dispatch(setBtcBalance(bitcoinBalance));
    // ::::::::::::::::::::::::::::::::;Gas Price ::::::::::::::::::::::::::::::::::::::::://

    const gasPrice = await web3.eth.getGasPrice(fromAddress);
    console.log("GasPrice:::::::::", gasPrice)

    const gasPriceValue = parseInt(gasPrice, 16);
    console.log("GasPrice:::::::::", gasPriceValue)

    const nonce = await web3.eth.getTransactionCount(fromAddress)
    console.log("nonce:::::::::::::", nonce, web3.utils.toWei(0.0001, 'ether'))

    // :::::::::::::::::::::::::::::::: SET  ::::::::::::::::::::::::::::::::::::::::://

    
    dispatch(setFromAddress(fromAddress));
    dispatch(setPrivateKey(fromPrivateKey));
    dispatch(setBitcoinTestnetAddress(bitcoinTestnetAddress));
    dispatch(setPrivateKeyBtcWIF(privateKeyBtcWIF));
  }

  const handleCopy = () => {
    const mnemonicResult = mnemonic.join(' ');
    Clipboard.setString(mnemonicResult);
    // <FlashMessage position="top"/>
    showMessage({
      message: 'Data copied',
      backgroundColor: "#00BEF2",
      autoHide: true,
      duration: 2000,
      type: 'success',
      position: 'top',
    });

  };





  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: themeColor.background }]}>
      <View style={styles.main_container}>
        <CustomHeader onPress={() => { props.navigation.navigate("walletname") }} headerimg={{ tintColor: themeColor.text }} header='Secret phrase' />

        <View style={styles.upper_View}>
          <View style={styles.text_heading_container}>
            <Text style={[styles.text_main_heading, { color: themeColor.subText }]}>
              {Strings.English.secretPhrase.writeDown}
            </Text>
          </View>


          {loading ? <ActivityIndicator size="large" color={colors.lightBlue} /> :
            <View style={styles.body_items_container}>
              {mnemonic.map((item, index) => (
                <SmallButton

                  key={index}
                  btnView={[styles.btnView, { backgroundColor: themeColor.cardBackground, borderColor: themeColor.cardBackground }]}
                  textColor={[styles.btn_txt, { color: themeColor.text }]}
                  text2_style={[styles.btn_txt_2, { color: themeColor.text }]}
                  name_2={index + 1 + '.'}
                  buttonStyle={styles.btn_style}
                  name={item}
                  onPress={() => {
                    console.log(item);
                  }}
                />
              ))}
            </View>
          }
          <CustomBtnWIthIcon
            onPressFun={handleCopy}
            main_View={styles.Btn_View}
            buttonStyle={[styles.CopybtnStyle, { backgroundColor: themeColor.cardBackground }]}
            ImgSrc={image.copyIcon}
            LogoStyle={styles.copyLogo}
            textColor={styles.copyBtn_style}
            label={Strings.English.secretPhrase.copy}
          />
        </View>

        <View style={styles.Footer_Container}>
          <View style={[styles.msg_container, { backgroundColor: themeColor.background, borderColor: themeColor.cardBackground }]}>
            <Text style={[styles.msg_txt, { color: themeColor.text }]}>
              {Strings.English.secretPhrase.doNotShare}
            </Text>
            <Text style={[styles.msg_txt2, { color: themeColor.text }]}>
              {Strings.English.secretPhrase.futureWalletSupport}
            </Text>
          </View>

          <Button
            onPress={() => panelRef.current.togglePanel()}
            btnView={styles.footer_btn_view}
          />
        </View>
      </View>
      {/* {
      console.log("chkkk---",
       bottomSheetVisible)} */}
      {bottomSheetVisible && Platform.OS === 'android' ? (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={3}
          reducedTransparencyFallbackColor="white"
        />
      ) : null}

      <AfterTakingScreenshot
        onOpen={() => setBottomSheetVisible(true)}
        onClose={() => setBottomSheetVisible(false)}
        panelRef={panelRef}
        array={mnemonic}
        navigation={props.navigation}
        onNavigate={() => {
          setBottomSheetVisible(false)
          props.navigation.navigate('verifysecretphrase', { name: mnemonic })
        }}
      />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default SecretPhrase;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.White,
  },
  main_container: {
    flex: 1,
    marginHorizontal: dimen(24),
  },
  upper_View: {
    flex: 0.7,
  },
  text_heading_container: {
    alignItems: 'center',
    marginTop: dimen(16),
  },
  text_main_heading: {
    fontSize: dimen(16),
    fontFamily: fonts.PoppinsMedium,
    color: colors.greenText,
    lineHeight: 24,
    textAlign: 'center',
  },
  body_items_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: dimen(22),
  },
  btnView: {
    height: dimen(40),
    width: dimen(88),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLineColor,
    backgroundColor: colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimen(6),
  },
  btn_style: {
    flexDirection: 'row',
  },
  btn_txt: {
    fontSize: 13,
    color: colors.Black,
    fontFamily: fonts.PoppinsMedium,
  },
  btn_txt_2: {
    fontSize: 13,
    color: colors.topText,
    fontFamily: fonts.PoppinsMedium,
  },
  Btn_View: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimen(25),
  },
  CopybtnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimen(13),
    borderWidth: 1,
    borderColor: colors.background,
    borderRadius: 12,
  },
  copyLogo: {
    width: dimen(24),
    height: dimen(24),
  },
  copyBtn_style: {
    color: colors.background,
    fontSize: 15,
    fontFamily: fonts.PoppinsBold,
  },
  Footer_Container: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  msg_container: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: dimen(20),
    backgroundColor: colors.White,
    elevation: 2,
  },
  msg_txt: {
    textAlign: 'center',
    fontSize: 13.1,
    fontFamily: fonts.PoppinsMedium,
    lineHeight: dimen(24),
    marginBottom: dimen(12),
    color: colors.Black,
  },
  msg_txt2: {
    color: colors.Black,
    textAlign: 'center',
    fontSize: 13.1,
    fontFamily: fonts.PoppinsMedium,
    marginHorizontal: dimen(43),
    lineHeight: dimen(24),
  },
  footer_btn_view: {
    marginTop: dimen(32.21),
    marginBottom: dimen(66.88),
  },
});
