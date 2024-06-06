import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import SeperateLine from '../../Common/SeperateLine';
import CustomHeader from '../../Common/CustomHeader';
import { useTheme } from '@react-navigation/native';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';

const Security = (props) => {
    const { colors: themeColor, image } = useTheme();
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Security" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }}/>
            <SeperateLine />
            <View style={styles.dataView}>
                <View style={[styles.topTxt_view, { borderColor: themeColor.blueBorder }]}>
                    <Text style={[styles.text, { color: themeColor.subText }]}>Reset Passcode</Text>
                    <Image source={images.settingGreater}/>
                </View>
                <View style={styles.biometricView}>
                    <Text style={[styles.text, { color: themeColor.subText }]}>Biometric/Face ID</Text>
                    <Image source={images.lightTheme}/>
                </View>
                
            </View>

        </SafeAreaView>
    )
}

export default Security

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White

    },
    header: {
        marginHorizontal: dimen(21)
    },

    dataView: {
        marginHorizontal: dimen(24)
    },
    topTxt_view: {
        height: dimen(50),
        borderWidth: 1,
        borderRadius: 12,
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:dimen(16),
       marginVertical:dimen(24)
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium
    },
    biometricView:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:dimen(16),
    }

})