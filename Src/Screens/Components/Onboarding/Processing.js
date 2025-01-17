import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { images } from '../../../Theme/Images';
import Button from '../../Common/CustomButton';
import fonts from '../../../Theme/Fonts';
import { getDimensionPercentage as dimen, heightDimen } from '../../../Utils/Utils';
const Processing = (props) => {
    const { colors: themeColor, image } = useTheme();

    return (
        <SafeAreaView style={[styles.container]}>
            <ImageBackground source={images.futureBackgroundImg}
            style={{height:"100%",width:"100%",alignItems:"center",
                justifyContent:"center"
            }}
                blurRadius={9}
                >


                <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
                <View style={[styles.animationContainer, { backgroundColor: themeColor.cardBackground }]}>

                    <LottieView
                        style={styles.animation}
                        source={images.ProcessingAnimations}
                        autoPlay={true}
                        // loop={false}
                    />
                    <Text
                        style={[styles.processingText, { color: themeColor.text }]}>
                        Processing..........
                    </Text>
                    <Text
                        style={[styles.text2, { color: themeColor.subText }]}>
                        It might take a few minutes.
                    </Text>

                    <Button
                        onPress={() => { props.navigation.navigate("TabNavigation") }}
                        buttonStyle={{ width: dimen(250), borderRadius: 12, marginBottom: dimen(22),height:dimen(50),justifyContent:"center" }}
                    />
                </View>
            </ImageBackground>
         </SafeAreaView>
    )
}

export default Processing

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
    animation: {
        width: dimen(171),
        height: dimen(171),
    },
    processingText: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold,
    },
    text2: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        marginBottom: dimen(32),
        marginTop: dimen(16)
    }
})