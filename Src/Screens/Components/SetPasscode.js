import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, ref } from 'react'
import colors from '../../Theme/Colors'
import Button from '../Common/CustomButton'
import { images } from '../../Theme/Images'
import InputText from '../Common/Input'
import { Strings } from '../../Theme/Strings'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import fonts from '../../Theme/Fonts'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomHeader from '../Common/CustomHeader'
const CELL_COUNT = 6;


const SetPasscode = ({navigation}) => {

    const [passcode, setPasscode] = useState(["", "", "", "", "", ""])
    const passwordSet = (v, index) => {
        const updatedPasscode = [...passcode];
        updatedPasscode[index] = v;
        setPasscode(updatedPasscode);
    }

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={styles.main_View}>
            <View style={styles.main_container}>

                <CustomHeader 
                header={Strings.English.Passcode.setpasscode} 
                onPress={()=>{navigation.navigate("ImportWallet")}}
                />

                <View style={styles.body_container}>
                    <Image source={images.welcomelogo} style={styles.img_style} />
                    <Text style={styles.createPassTxt}>{Strings.English.Passcode.CreatePasscode}</Text>
                    <View style={styles.input_container}>

                        {/* {passcode.map((item, index) => (
                            <InputText key={index} maximumLength={1} onChngFunction={(v) => { passwordSet(v, index) }} value={item} Inputstyle={styles.pass_input} placeholderText='' />
                        ))} */}

                        <CodeField
                            ref={ref}
                            {...props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                            testID="my-code-input"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />

                    </View>
                    <Text style={styles.txt_style}>{Strings.English.Passcode.passcodeAddsSecurity}</Text>
                </View>
                <View style={styles.Footer_container}>
                    <Button onPress={()=>{navigation.navigate("ConfirmPasscode")}}  btnView={styles.btnView} />
                </View>

            </View>
        </View>
    )
}

export default SetPasscode

const styles = StyleSheet.create({
    main_View: {
        flex: 1,
        backgroundColor: colors.White,
        justifyContent: "center",
        alignItems: "center",
    },
    main_container: {
        flex: 1,
        marginHorizontal: dimen(24),
    },
    body_container: {
        flex: 0.7,
        marginTop: dimen(145.65)
    },
    img_style: {
        width: dimen(88.75),
        height: dimen(88.75),
        alignSelf: "center",
        marginBottom: dimen(50.69)
    },
    createPassTxt: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        alignSelf: "center",
    },
    input_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: dimen(16),
        marginBottom: dimen(36.25)
    },
    cell: {
        width: dimen(20.5),
        height: dimen(42.21),
        lineHeight: 38,
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: colors.border_input,
        textAlign: 'center',
        marginRight: dimen(18.5),
    },
    pass_input: {
        padding: 1,
        fontSize: 18,
        borderBottomWidth: 1,
        textAlign: "center",
        borderColor: colors.border_input
    },
    txt_style: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.topText
    },
    Footer_container: {
        flex: 0.3,
        justifyContent: "flex-end"
    },
    btnView: {
        marginBottom: dimen(66.88),

    },

})