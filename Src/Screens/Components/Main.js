import React, { useEffect } from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused, useNavigation, useTheme } from '@react-navigation/native';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import LinearGradient from 'react-native-linear-gradient';
import CommonTransition from './Send/CommonTransition';
import CustomHeader from '../Common/CustomHeader'
import SeperateLine from '../Common/SeperateLine';
import { Strings } from '../../Theme/Strings';
import { images } from '../../Theme/Images';
import colors from '../../Theme/Colors'
import fonts from '../../Theme/Fonts';

const Main = () => {
    const { colors: themeColor, image } = useTheme()
    const isFocused = useIsFocused()
    const navigation = useNavigation()

    useEffect(() => {
        //   if(isFocused)
        //     StatusBar.setBackgroundColor(themeColor.mainScreenBgColor,true)

        return () => { }
    }, [isFocused])
    const data = [
        { id: '1', imageSource: images.notification2, name: Strings.English.main.BNBBeaconChain, dollarValue: Strings.English.main.dollarValue1, percentageValue: Strings.English.main.percentagevalue1, rightText: Strings.English.main.BNB, dollarValueRight: Strings.English.main.dollarValueRight1 },
        { id: '2', imageSource: images.notification1, name: Strings.English.main.Bitcoin, dollarValue: Strings.English.main.dollarValue2, percentageValue: Strings.English.main.percentagevalue2, rightText: Strings.English.main.BTC, dollarValueRight: Strings.English.main.dollarValueRight2 },
        { id: '3', imageSource: image.ethImage, name: Strings.English.main.Ethereum, dollarValue: Strings.English.main.dollarValue3, percentageValue: Strings.English.main.percentagevalue3, rightText: Strings.English.main.ETH, dollarValueRight: Strings.English.main.dollarValueRight3 },
        { id: '4', imageSource: images.tron, name: Strings.English.main.Tron, dollarValue: Strings.English.main.dollarValue1, percentageValue: Strings.English.main.percentagevalue1, rightText: Strings.English.main.TRX, dollarValueRight: Strings.English.main.dollarValueRight4 },
    ];

    <StatusBar backgroundColor={themeColor.mainScreenBgColor[0]} barStyle={"dark-content"} />

    const renderItem = ({ item }) => (
        <View>
            <View style={styles.itemContainer}>
                <View style={{ flexDirection: "row", width: dimen(200) }}>
                    <View>
                        <Image source={item.imageSource} style={styles.imgStyle} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[styles.uper_text, { color: themeColor.text }]}>{item.name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={[styles.bottom_text, { color: themeColor.subText }]}>{item.dollarValue}</Text>
                            <Text style={[styles.bottom_text, { color: colors.parrotGreenText }]}> {item.percentageValue}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Image source={images.bar} />
                </View>
                <View>
                    <Text style={[styles.uper_text, { alignSelf: "flex-end", color: themeColor.text }]}>{item.rightText}</Text>
                    <Text style={[styles.bottom_text, { alignSelf: "flex-end", color: themeColor.subText }]}>{item.dollarValueRight}</Text>
                </View>
            </View>
        </View>
    );



    return (


        <LinearGradient colors={themeColor.mainScreenBgColor} style={styles.linearGradient}>
            {/* <StatusBar barStyle="dark-content" /> */}
            {/* <StatusBar backgroundColor={themeColor.mainScreenBgColor[0]}  barStyle={"dark-content"} /> */}

            <CustomHeader onPress={() => { navigation.navigate("ConfirmPasscode") }} header={Strings.English.main.MyWallet2} header_style={styles.header} imgLeft={images.welcomelogo} imgRight={image.bell} headerimg={styles.headerimg_style} onPress2={() => { navigation.navigate("Notification") }} />

            <View style={styles.top_labelText_view}>
                <Text style={[styles.top_labelText, { color: themeColor.text }]}>{Strings.English.main.totalBalance}</Text>
                <Text style={[styles.top_valuetext, { color: themeColor.text }]}>{Strings.English.main.dollarValue}</Text>
            </View>


            <View style={styles.transitionView_container}>

                <CommonTransition image={image.send} label={Strings.English.Transactions.Send} onPress={() => { navigation.navigate("Send") }} />
                <CommonTransition image={image.recieve} label={Strings.English.Transactions.Receive} onPress={() => { navigation.navigate("Receive") }} />
                <CommonTransition image={image.buy} label={Strings.English.Transactions.Buy} onPress={() => { navigation.navigate("BuyCrypto") }} />
                <CommonTransition image={image.sell} label={Strings.English.Transactions.Sell} onPress={() => { navigation.navigate("SellCrypto") }} />

            </View>

            {/* .................................BOTTOM VIEW................................ */}

            <View style={[styles.bottom_View, { backgroundColor: themeColor.cardBackground }]}>
                <View style={styles.bottom_ist_view}>
                    <View style={styles.token_textView}>
                        <Text style={[styles.token_text, { color: themeColor.text }]}>{Strings.English.main.Tokens}</Text>
                    </View>

                    <View style={styles.img_view}>
                        <TouchableOpacity>
                            <Image source={images.mainTokenImg1} style={styles.mainTokenImg} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.mainTokenImg2} style={styles.mainTokenImg} />

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.mainTokenImg3} style={styles.mainTokenImg} />

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.mainTokenImg4} style={styles.mainTokenImg} />

                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.bottom_2nt_view}>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={() => (
                            <View style={styles.SeperateLine_view}>
                                <SeperateLine />
                            </View>
                        )}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        </LinearGradient>


    )
}

export default Main

const styles = StyleSheet.create({
    main_container: {
        flex: 1,

    },
    linearGradient: {
        width: '100%',
        flex: 1,
    },
    header: {
        marginHorizontal: dimen(24)
    },
    headerimg_style: {
        height: dimen(30),
        width: dimen(30)
    },
    top_labelText_view: {
        marginTop: dimen(36),

    },
    top_labelText: {
        fontSize: 16,
        textAlign: "center",
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium
    },
    top_valuetext: {
        fontSize: 44,
        textAlign: "center",
        color: colors.Black,
        fontFamily: fonts.PoppinsBold
    },

    transitionView_container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: dimen(28)
    },

    bottom_View: {
        marginTop: dimen(30),
        backgroundColor: "#ECFBFF",
        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        flex: 1,
    },
    bottom_ist_view: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: dimen(20),
        marginVertical: dimen(24)
    },
    token_textView: {
        height: dimen(23),
        width: dimen(60),

    },
    token_text: {
        fontSize: dimen(18),
        fontFamily: fonts.PoppinsBold,
        color: colors.Black,
        lineHeight: dimen(22)
    },
    img_view: {

        justifyContent: "space-around",
        flexDirection: "row",

    },
    mainTokenImg: {
        height: dimen(20),
        width: dimen(20),
        marginHorizontal: dimen(5)
    },
    bottom_2nt_view: {
        marginHorizontal: dimen(18),
        flex: 1,
    },
    imgStyle: {
        height: dimen(44),
        width: dimen(44),
        resizeMode: 'contain'

    },
    uper_text: {
        fontSize: dimen(16),
        fontFamily: fonts.PoppinsBold,
        color: colors.Black
    },
    bottom_text: {
        fontSize: dimen(14),
        fontFamily: fonts.PoppinsBold,
        color: colors.greenText

    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    SeperateLine_view: {
        marginHorizontal: dimen(24),
        marginVertical: dimen(16)
    }
})