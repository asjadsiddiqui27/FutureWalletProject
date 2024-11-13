
import * as types from "../ActionTypes"

const initialState = {
  mnemonicResult: null,
  ethBalance: null,
  bnbBalance: null,
  maticBalance: null,
  btcBalance: null,
  privateKey: null,
  bitcoinTestnetAddress: null,
  privateKeyBtcWIF: null,
  tronBalance: null,
  tronKey: null,
  fromAddress: null,
  name:null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MNEMONIC_RESULT:
      return { ...state, mnemonicResult: action.payload };
    case types.SET_ETH_BALANCE:
      return { ...state, ethBalance: action.payload };
    case types.SET_BNB_BALANCE:
      return { ...state, bnbBalance: action.payload };
    case types.SET_MATIC_BALANCE:
      return { ...state, maticBalance: action.payload };
    case types.SET_BTC_BALANCE:
      return { ...state, btcBalance: action.payload };
    case types.SET_PRIVATE_KEY:
      return { ...state, privateKey: action.payload };
    case types.SET_BITCOIN_TESTNET_ADDRESS:
      return { ...state, bitcoinTestnetAddress: action.payload };
    case types.SET_PRIVATE_KEY_BTC_WIF:
      return { ...state, privateKeyBtcWIF: action.payload };
    case types.SET_TRON_BALANCE:
      return { ...state, tronBalance: action.payload };
    case types.SET_TRON_KEY:
      return { ...state, tronKey: action.payload };
    case types.SET_FROM_ADDRESS:
      return { ...state, fromAddress: action.payload };
      case types.SET_WALLET_NAME:
        return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default appReducer