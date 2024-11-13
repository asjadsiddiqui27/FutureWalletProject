import colors from "../Colors";
import { images } from "../Images";

const DefaultTheme = {
    dark: false,
    colors: {
        // onboarding  start//
      
        primary: '#007AFF',
        background: colors.White,
        background2: "#F0F9FC",
        card: '#ffffff',
        text: colors.Black,
        border: '#D8D8D8',
        notification: '#FF3B30',
        imgTextFirst: colors.Black,
        subText: "#56828E",
        cardBackground: "#F0F9FC",
        btn: [ "#00BEF2", "#00BEF2"],
        mainScreenBgColor: ['#90E6FE', '#C5F2FF', '#D8F7FF'],
        blueBorder: "#00BEF2",
        linearCard: ['#90E6FE', '#C5F2FF', '#D8F7FF'],
        transactionImgView:"#ffffff",
        seperarteLineColor:"#D8E2EC",
        commonBtn:[ "#00BEF2", "#00BEF2"],
        cardBackground2:"#ffffff",
        alertBtnColor:"#2B4058"
    },
    image: {
        OnboardingPge: images.group,
        send:images.sendLight,
        recieve:images.MinimizeSquare,
        buy:images.RecieveSquare,
        sell:images.sell,
        bell:images.bell,
        swap:images.swapBitcoin,
        bottomsheetIcon:images.vector,
        copyIcon:images.copyColored,
        setPasscode:images.welcomelogo,
        ethImage:images.notification3,
        chcekoutEth:images.whiteTriangle,
        transfer:images.transferBitcoin,
        topTransfer:images.topTransferBitcoin,
        downTransfer:images.downTransferBitcoin,
        smartContact:images.smartContact,
        transfer:images.lightTransfer,
        closeStar: images.blackStar,
        openStar:images.openBlackStar,
        theme:images.lightTheme,
        splash: images.lightSplash
    }
}
export default DefaultTheme;