// import PropTypes, { any } from 'prop-types'
// import colors from '../Theme/Colors';
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../../Theme/Colors';
import { getDimensionPercentage } from '../../Utils/Utils';
import fonts from '../../Theme/Fonts';

// type CustomKeyboardType = 'default' | 'numeric' | 'email-address' | 'phone-pad'; // Define the custom keyboard type

function InputText({
    View_input_ContainerSyle = styles.input_Container,
    placeholderText = "Enter Here",
    Inputstyle = styles.input,
    onChngFunction = (v) => { console.log(v) },
    maximumLength = 10,
    KybrdTyp = 'default', // Set default value as per your requirement
    placeholderTextColor = "grey",
    value = "",
    psswrdVisible = false
}) {
    return (
      

        <TextInput
            onChangeText={onChngFunction}
            placeholder={placeholderText}
            style={Inputstyle}
            maxLength={maximumLength}
            keyboardType={KybrdTyp}
            placeholderTextColor={placeholderTextColor}
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
        color: colors.Black,
        borderColor: colors.background,
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: getDimensionPercentage(16.32),
    },
})


export default InputText;











