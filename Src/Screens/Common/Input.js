
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../../Theme/Colors';
import { getDimensionPercentage } from '../../Utils/Utils';
import fonts from '../../Theme/Fonts';
import { useTheme } from '@react-navigation/native';


function InputText({
    View_input_ContainerSyle = styles.input_Container,
    placeholderText = "Enter Here",
    Inputstyle = styles.input,
    onChngFunction = (v) => { console.log(v) },
    maximumLength = 10,
    KybrdTyp = 'default', 
    placeholderTextColor = "white",
    value = "",
    psswrdVisible = false
}) {
    const {colors: themeColor, image} = useTheme()
    return (
      

        <TextInput
            onChangeText={onChngFunction}
            placeholder={placeholderText}
            style={[Inputstyle,{borderColor:themeColor.blueBorder}]}
            maxLength={maximumLength}
            keyboardType={KybrdTyp}
            placeholderTextColor={[placeholderTextColor,{color:themeColor.text}]}
            value={value}
            secureTextEntry={psswrdVisible}

        />

    )
}





const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        // fontWeight:"500",
        color: colors.White,
        borderColor: colors.background,
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: getDimensionPercentage(16.32),
    },
})


export default InputText;











