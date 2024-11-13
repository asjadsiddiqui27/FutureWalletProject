import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import fonts from '../../Theme/Fonts';
import colors from '../../Theme/Colors';
import { images } from '../../Theme/Images';
import { useTheme } from '@react-navigation/native';
import Button from './CustomButton';


const CommonModal = (props) => {
    const { colors: themeColor, image } = useTheme();
    return (
        <SafeAreaView style={[styles.container]}>
            <ImageBackground source={images.futureBackgroundImg}
                style={{
                    height: "100%", width: "100%", alignItems: "center",
                    justifyContent: "center"
                }}
                blurRadius={9}
            >


                <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
                {/* <View style={[styles.animationContainer, { backgroundColor: themeColor.cardBackground }]}> */}

                    <View style={[styles.modalContent, { backgroundColor: themeColor.cardBackground }]}>
                        <Text style={[styles.alertMsg, { color: themeColor.text }]}>Are you sure you want to delete the address ?</Text>
                        <View style={styles.btnView}>
                            <Button name='No' buttonStyle={styles.buttonStyle}  onPress={()=>{props.navigation.navigate("ManageWallets")}} />
                            <Button name='Yes' buttonStyle={styles.buttonStyle} onPress={()=>{props.navigation.navigate("ManageWallets")}} />
                        </View>
                    </View>
                {/* </View> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CommonModal

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animationContainer: {
        width: dimen(314),
        height: dimen(320),
        borderRadius: dimen(17),
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    modalContent: {
        // height: 258,
        marginHorizontal:dimen(24),
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnView: {
        gap: 17,
        flexDirection: "row",
        marginTop:dimen(60)
    },
    alertMsg: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold,
        textAlign: "center",
        marginTop:dimen(30),
        lineHeight:dimen(22)
    },
    buttonStyle: {
        height: 50,
        width: 158,
        backgroundColor: colors.background,
        borderRadius: 25,
        color:"white"
    }
})