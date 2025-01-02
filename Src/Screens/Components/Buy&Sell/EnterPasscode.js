import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { Strings } from '../../../Theme/Strings';

const CELL_COUNT = 6;

const EnterPasscode = ({ navigation }) => {
    
    const { colors: themeColor, image } = useTheme();
    const pinInput = useRef(null);
    const [code, setCode] = useState('');

    useEffect(() => {
        if (code.length === CELL_COUNT) {
            navigation.navigate("Acknowledge");
        }
    }, [code]);

    return (
        <SafeAreaView style={[styles.main_View, { backgroundColor: themeColor.background }]}>
            <View style={styles.main_container}>
                <CustomHeader
                    header="Enter Passcode"
                    headerimg={{ tintColor: themeColor.text }}
                    onPress={() => { navigation.navigate("ManageWallets") }}
                />
                <View style={styles.body_container}>
                    <Image source={image.setPasscode} style={styles.img_style} />
                    <Text style={[styles.createPassTxt, { color: themeColor.text }]}>Enter Passcode</Text>
                    <View style={styles.input_container}>
                        <SmoothPinCodeInput
                            ref={pinInput}
                            value={code}
                            codeLength={6}
                            onTextChange={code => setCode(code)}
                            cellStyle={{
                                width:30,
                                borderBottomWidth: 2,
                                borderColor: themeColor.text,

                            }}
                            cellStyleFocused={{
                                borderColor: themeColor.subText,

                            }}
                            textStyle={{
                                fontSize: 24,
                                color: themeColor.text,
                            }}
                        />
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={[styles.txt_style, { color: themeColor.subText }]}>{Strings.Passcode.passcodeAddsSecurity}</Text>
                    </View>
                </View>
                <View style={styles.Footer_container}>
                    {/* No need for the continue button */}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default EnterPasscode;

const styles = StyleSheet.create({
    main_View: {
        flex: 1,
        backgroundColor: colors.White,
        justifyContent: "center",
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
        marginTop: dimen(20),
        marginBottom: dimen(36.25)

    },
    txt_style: {
        fontSize: dimen(14),
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
    },
    Footer_container: {
        flex: 0.3,
        justifyContent: "flex-end",
    },
    btnView: {
        marginBottom: dimen(66.88),
    },
});
