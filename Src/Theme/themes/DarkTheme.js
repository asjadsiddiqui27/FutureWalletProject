import Onboarding from "../../Screens/Components/Onboarding";
import colors from "../Colors";
import { images } from "../Images";

const DarkTheme = {
    dark: true,
    colors: {
        // onboarding  start//
        primary: '#0A84FF',
     
        background: colors.drkBackgroundColor,
        background2: colors.drkBackgroundColor,
        card: '#202934',
        text: '#ffffff',
        border: '#272729',
        notification: '#FF453A',
        imgTextFirst: '#00BEF2',
        subText: "#9BA0A6",
        cardBackground: "#0F2237",
        btn: ['#00BEF2', '#008DB4', '#005360'],
        mainScreenBgColor: [colors.drkBackgroundColor, colors.drkBackgroundColor],
        blueBorder: "#224367",
        linearCard: ['#00BEF2', '#008DB4', '#005360'],
        transactionImgView: "",
        seperarteLineColor: "#374A5E",
        commonBtn: ['#00BEF2', '#008DB4', '#005360'],
        cardBackground2: "#0F2237",
        alertBtnColor:"#2B4058"
    },
    image: {
        OnboardingPge: images.groupdrk,
        send: images.darkSend,
        buy: images.darkBuy,
        recieve: images.darkrecieve,
        sell: images.darkSell,
        bell: images.darkBell,
        swap: images.darkSwap,
        bottomsheetIcon: images.darkVector,
        copyIcon: images.darkCopy,
        setPasscode: images.darkPasscode,
        ethImage: images.darkEth,
        chcekoutEth: images.darkCheckout,
        transfer: images.darkSwapping,
        topTransfer: images.darkTopTransfer,
        downTransfer: images.darkDownTransfer,
        smartContact: images.darkSmartContact,
        transfer: images.darkTransfer,
        closeStar: images.whiteStar,
        openStar:images.openWhiteStar,
        theme:images.darkTheme
    }
};

export default DarkTheme;