import * as types from "../ActionTypes"
export const setMnemonicResult = (mnemonicResult) => ({
    type: types.SET_MNEMONIC_RESULT,
    payload: mnemonicResult,
  });
  
  export const setEthBalance = (ethBalance) => ({
    type: types.SET_ETH_BALANCE,
    payload: ethBalance,
  });
  
  export const setBnbBalance = (bnbBalance) => ({
    type: types.SET_BNB_BALANCE,
    payload: bnbBalance,
  });
  
  export const setMaticBalance = (maticBalance) => ({
    type: types.SET_MATIC_BALANCE,
    payload: maticBalance,
  });
  
  export const setBtcBalance = (btcBalance) => ({
    type: types.SET_BTC_BALANCE,
    payload: btcBalance,
  });
  
  export const setPrivateKey = (privateKey) => ({
    type: types.SET_PRIVATE_KEY,
    payload: privateKey,
  });
  
  export const setBitcoinTestnetAddress = (bitcoinTestnetAddress) => ({
    type: types.SET_BITCOIN_TESTNET_ADDRESS,
    payload: bitcoinTestnetAddress,
  });
  
  export const setPrivateKeyBtcWIF = (privateKeyBtcWIF) => ({
    type: types.SET_PRIVATE_KEY_BTC_WIF,
    payload: privateKeyBtcWIF,
  });
  
  export const setTronBalance = (tronBalance) => ({
    type: types.SET_TRON_BALANCE,
    payload: tronBalance,
  });
  
  export const setTronKey = (tronKey) => ({
    type: types.SET_TRON_KEY,
    payload: tronKey,
  });
  
  export const setFromAddress = (fromAddress) => ({
    type: types.SET_FROM_ADDRESS,
    payload: fromAddress,
  });
  export const setWalletName = (name) => ({
    type: types.SET_WALLET_NAME,
    payload: name,
  });

  export const setNotificationData = (notiData) => ({
    type: types.SET_NOTIFICATION_DATA,
    payload: notiData,
  });