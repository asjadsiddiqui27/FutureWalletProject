import PropTypes, { any } from 'prop-types'
import colors from '../Theme/Colors';
import {StyleSheet, TextInput ,View } from 'react-native'

// type CustomKeyboardType = 'default' | 'numeric' | 'email-address' | 'phone-pad'; // Define the custom keyboard type

function InputText({
    View_input_ContainerSyle=styles.input_Container,
    placeholderText = "Enter Here",
    Inputstyle = styles.input,
    onChngFunction = (v)=>{console.log(v)},
    maximumLength = 10,
    // KybrdTyp="default"
    KybrdTyp = 'default', // Set default value as per your requirement
    placeholderTextColor= "grey",
    value="",
    psswrdVisible=false
}) 

{
return (
    // <View style={styles.View_input_ContainerSyle}>

    <TextInput onChangeText={onChngFunction} 
               placeholder={placeholderText} 
               style={Inputstyle}
               maxLength={maximumLength}
               keyboardType= {KybrdTyp}
               placeholderTextColor={placeholderTextColor}
               value={value}   
               secureTextEntry={psswrdVisible} 
                        
               />
    // </View>

)}



//  InputText.propTypes={
//     placeholderText: PropTypes.string,
//     Inputstyle: PropTypes.any,
//     onChngFunction:PropTypes.func,
//     maximumLength : PropTypes.number,
//   KybrdTyp: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
//   placeholderColor: PropTypes.any,
//   value:PropTypes.any
//  }

 const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        borderColor: colors.addressInputPlaceholder,
        borderBottomWidth: 0.7,
        flex: 1,
    },
    input_Container:{},
 })


export default InputText;











