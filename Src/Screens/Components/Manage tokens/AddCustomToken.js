
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { useTheme } from '@react-navigation/native'
import SeperateLine from '../../Common/SeperateLine';
import CustomHeader from '../../Common/CustomHeader';
import colors from '../../../Theme/Colors';
import Button from '../../Common/CustomButton';
import TextOrInput from '../../Common/TextOrInput';
import { Strings } from '../../../Theme/Strings';
import fonts from '../../../Theme/Fonts';
import { Image } from 'react-native';
import { images } from '../../../Theme/Images';

const AddCustomToken = (props) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header={"Add Custom Token"} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }} />
            <SeperateLine />
            <View style={{ flex: 0.9, marginHorizontal: dimen(24), }}>
                <View style={styles.inputView}>
                    <TextOrInput label={"Network"} placeholder={"Etherum"} />
                    <TextOrInput label={"Contact Address "} placeholder={"0x......"} />
                    <TextOrInput label={"Name"} placeholder={"Venom"} />
                    <TextOrInput label={"Symbol"} placeholder={"VNM"} />
                    <TextOrInput label={"Decimals"} placeholder={"18"} />
                </View>
                <View style={[styles.bottomTextView, { backgroundColor: themeColor.cardBackground }]}>
                    <View style={{ width: dimen(18), }}>
                        <Image source={images.vector} style={{
                            height: 16, width: 14,
                            resizeMode: 'contain',
                            marginTop: 4,
                        }} />
                    </View>
                    <View>
                        <Text style={[styles.bottomText, { color: themeColor.text }]}>Anyone can create a token, including fake versions of existing tokens. Learn about scams and security risks.</Text>

                    </View>
                </View>
            </View>
            <View style={{ flex: 0.15, marginHorizontal: dimen(24), }}>
                <Button name={Strings.AddressBook.Save} onPress={() => { props.navigation.navigate("ManageTokens") }} />
            </View>
        </SafeAreaView>
    )
}

export default AddCustomToken

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White

    },
    header: {
        marginHorizontal: dimen(21)
    },
    inputView: {
        marginTop: dimen(24),

        gap: dimen(10)
    },
    bottomTextView: {
        height: dimen(90),
        width: "100%",
        marginTop: dimen(32),
        flexDirection: "row",
        paddingTop:dimen(12),
        // alignItems: "center",
        justifyContent: "center",
        // marginHorizontal: dimen(17)
        paddingHorizontal: dimen(17)
    },
    bottomText: {
        fontSize: 14,
        fontFamily: fonts.PoppinsLight,

    }
})