import Onboarding from "../../Screens/Components/Onboarding";
import colors from "../Colors";
import { images } from "../Images";

const DarkTheme = {
    dark: true,
    colors: {
        // onboarding  start//
        primary: '#0A84FF',
        background: colors.drkBackgroundColor,
        card: '#202934',
        text: '#ffffff',
        border: '#272729',
        notification: '#FF453A',
        imgTextFirst:'#00BEF2',
        // btn:['#00BEF2', '#008DB4', '#005360'],
        SubText:"#9BA0A6"
        
    },
    image:{
        OnboardingPge:images.groupdrk
    }
};

export default DarkTheme;