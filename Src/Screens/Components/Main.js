import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'
import CustomHeader from '../Common/CustomHeader'
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import { images } from '../../Theme/Images';
import fonts from '../../Theme/Fonts';
import { Strings } from '../../Theme/Strings';




const Main = (props) => {
    return (

        <View style={styles.main_container}>
            <StatusBar backgroundColor="lightblue" barStyle="dark-content" />

            <View style={{ backgroundColor: "lightblue" }}>

                <CustomHeader onPress={() => { props.navigation.navigate("ConfirmPasscode") }} header={Strings.English.main.MyWallet2} header_style={styles.header} imgLeft={images.welcomelogo} imgRight={images.bell} headerimg={styles.headerimg_style} onPress2={() => { props.navigation.navigate("Notification") }} />

                <View style={styles.top_labelText_view}>
                    <Text style={styles.top_labelText}>{Strings.English.main.totalBalance}</Text>
                    <Text style={styles.top_valuetext}>{Strings.English.main.dollarValue}</Text>
                </View>


                <View style={{ flexDirection: "row",justifyContent:"center",  marginTop: dimen(28) }}>

                    {/* ............................Send .....................................*/}
                    <View style={{ alignItems: "center" ,marginHorizontal:dimen(10)}}>
                        <TouchableOpacity>
                            <View style={styles.img_background_view}>
                                <Image source={images.send} style={styles.images_style} />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.transfer_text}>{Strings.English.main.Send}</Text>
                    </View>

                    {/* ............................Receive .....................................*/}

                    <View style={{ alignItems: "center" ,marginHorizontal:dimen(10)}}>
                        <TouchableOpacity>
                            <View style={styles.img_background_view}>
                                <Image source={images.MinimizeSquare} style={styles.images_style} />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.transfer_text}>{Strings.English.main.Receive}</Text>
                    </View>

                    {/* ............................Buy .....................................*/}

                    <View style={{ alignItems: "center" ,marginHorizontal:dimen(10)}}>
                        <TouchableOpacity>
                            <View style={styles.img_background_view}>
                                <Image source={images.RecieveSquare} style={styles.images_style} />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.transfer_text}>{Strings.English.main.Buy}</Text>
                    </View>
                    {/* ............................Sell .....................................*/}

                    <View style={{ alignItems: "center" ,marginHorizontal:dimen(10)}}>
                        <TouchableOpacity>

                            <View style={styles.img_background_view}>
                                <Image source={images.sell} style={styles.images_style} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.transfer_text}>{Strings.English.main.Sell}</Text>
                    </View>


                </View>
            </View>
            {/* .................................BOTTOM VIEW................................ */}

            <View style={styles.bottom_View}>
                <View style={styles.bottom_ist_view}>
                    <View style={styles.token_textView}>
                        <Text style={styles.token_text}>{Strings.English.main.Tokens}</Text>
                    </View>
                    <View style={styles.img_view}>
                        <Image source={images.mainTokenImg1} style={styles.mainTokenImg} />
                        <Image source={images.mainTokenImg2} style={styles.mainTokenImg} />
                        <Image source={images.mainTokenImg3} style={styles.mainTokenImg} />
                        <Image source={images.mainTokenImg4} style={styles.mainTokenImg} />
                    </View>
                </View>

                <View style={styles.bottom_2nt_view}>
                    <View>

                        {/*............................................... 1st ROW.................................................... */}

                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <View style={{ flexDirection: "row",width:dimen(200)}}>
                                <View>
                                    <Image source={images.notification2} style={styles.imgStyle} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.uper_text}>{Strings.English.main.BNBBeaconChain}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.bottom_text}>{Strings.English.main.dollarValue1}</Text>
                                        <Text style={[styles.bottom_text, { color: colors.parrotGreenText }]}>{Strings.English.main.percentagevalue1}</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={{ alignSelf: "center" }}>
                                <Image source={images.bar} />
                            </View>
                            <View style={{ width: dimen(66) }}>
                                <Text style={[styles.uper_text, { alignSelf: "flex-end" }]}>{Strings.English.main.BNB}</Text>
                                <Text style={[styles.bottom_text, { alignSelf: "flex-end" }]}>{Strings.English.main.dollarValueRight1} </Text>
                            </View>
                        </View>

                        <View style={{

                            borderColor: "#BEDFE8",
                            borderWidth: 0.8,
                            marginVertical: dimen(16)
                        }} />

                        {/*............................................... 2nd ROW.................................................... */}

                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <View style={{ flexDirection: "row",width:dimen(200)}}>
                                <View>
                                    <Image source={images.notification1} style={styles.imgStyle} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.uper_text}>{Strings.English.main.Bitcoin}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.bottom_text}>{Strings.English.main.dollarValue2}</Text>
                                        <Text style={[styles.bottom_text, { color: colors.parrotGreenText }]}>{Strings.English.main.percentagevalue2}</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={{ alignSelf: "center" }}>
                                <Image source={images.bar} />
                            </View>
                            <View style={{ width: dimen(80) }}>
                                <Text style={[styles.uper_text, { alignSelf: "flex-end" }]}>{Strings.English.main.BTC}</Text>
                                <Text style={[styles.bottom_text, { alignSelf: "flex-end" }]}>{Strings.English.main.dollarValueRight2} </Text>
                            </View>
                        </View>

                        <View style={{

                            borderColor: "#BEDFE8",
                            borderWidth: 0.8,
                            marginVertical: dimen(16)
                        }} />

                        {/*............................................... 3rd ROW.................................................... */}


                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <View style={{ flexDirection: "row",width:dimen(204)}}>
                                <View>
                                    <Image source={images.notification3} style={styles.imgStyle} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.uper_text}>{Strings.English.main.Ethereum}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.bottom_text}>{Strings.English.main.dollarValue3}</Text>
                                        <Text style={[styles.bottom_text, { color: colors.parrotGreenText }]}>{Strings.English.main.percentagevalue3}</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={{ alignSelf: "center" }}>
                                <Image source={images.bar} style={{marginRight:20}}/>
                            </View>
                            <View style={{ width: dimen(70) }}>
                                <Text style={[styles.uper_text, { alignSelf: "flex-end" }]}>{Strings.English.main.ETH}</Text>
                                <Text style={[styles.bottom_text, { alignSelf: "flex-end" }]}>{Strings.English.main.dollarValueRight3} </Text>
                            </View>
                        </View>

                        <View style={{

                            borderColor: "#BEDFE8",
                            borderWidth: 0.8,
                            marginVertical: dimen(16)
                        }} />


                        {/*............................................... 4th ROW.................................................... */}


                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <View style={{ flexDirection: "row",width:dimen(200)}}>
                                <View>
                                    <Image source={images.tron} style={styles.imgStyle} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.uper_text}>{Strings.English.main.Tron}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.bottom_text}>{Strings.English.main.dollarValue1}</Text>
                                        <Text style={[styles.bottom_text, { color: colors.parrotGreenText }]}>{Strings.English.main.percentagevalue1}</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={{ alignSelf: "center" }}>
                                <Image source={images.bar} />
                            </View>
                            <View style={{ width: dimen(70) }}>
                                <Text style={[styles.uper_text, { alignSelf: "flex-end" }]}>{Strings.English.main.TRX}</Text>
                                <Text style={[styles.bottom_text, { alignSelf: "flex-end" }]}>{Strings.English.main.dollarValueRight4} </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>


        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "lightblue"

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
    img_background_view: {
        height: dimen(60),
        width: dimen(60),
        borderRadius: 60,
        backgroundColor: colors.White,
        alignItems: "center",
        justifyContent: "center"
    },
    images_style: {
        height: dimen(30),
        width: dimen(30)
    },
    transfer_text: {
        fontSize: 14,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,
        padding: dimen(8)
    },
    bottom_View: {
        backgroundColor: "#ECFBFF",
        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        flex: 1,
        marginTop:dimen(32)

    },
    bottom_ist_view: {

        // flex: 1,
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
        fontSize: 18,
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
        // backgroundColor: "red",
        flex: 1
    },
    imgStyle: {
        height: dimen(44),
        width: dimen(44),

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

    }
})