import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import colors from '../../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import { Strings } from '../../../Theme/Strings';
import Button from '../../Common/CustomButton';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import ManageBottomSheet from './ManageBottomSheet';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ManageWallets = (props) => {
    const { colors: themeColor, image } = useTheme()
    const panelRef = useRef(null);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selectedId, setSelectedId] = useState("1")
    const [walletName, setWalletName] = useState("");
    const data = [
        { id: '1', imageSource: images.welcomelogo, name: walletName, walletType: Strings.English.ManageWallets.walletType1, imageSource2: images.bluePencil, },
        // { id: '2', imageSource: images.welcomelogo, name: Strings.English.ManageWallets.Wallet02, walletType: Strings.English.ManageWallets.walletType2, imageSource2: images.bluePencil, },
        // { id: '3', imageSource: images.welcomelogo, name: Strings.English.ManageWallets.Basic, walletType: Strings.English.ManageWallets.walletType2, imageSource2: images.bluePencil, },
        // { id: '4', imageSource: images.welcomelogo, name: Strings.English.ManageWallets.Wallet02, walletType: Strings.English.ManageWallets.walletType2, imageSource2: images.bluePencil, },
        // { id: '5', imageSource: images.welcomelogo, name: Strings.English.ManageWallets.Basic, walletType: Strings.English.ManageWallets.walletType2, imageSource2: images.bluePencil, },
        // { id: '6', imageSource: images.welcomelogo, name: Strings.English.ManageWallets.Wallet02, walletType: Strings.English.ManageWallets.walletType2, imageSource2: images.bluePencil, },


    ];
    const handlePress = (itemId) => {
        setSelectedId(itemId)

    };
    useEffect(() => {
        const getUser = async () => {
            try {  
                await AsyncStorage.setItem('walletName', JSON.stringify(walletName));

                console.log("walletName*************",walletName);
                const getWalletName = JSON.parse(await AsyncStorage.getItem('name'));
                    setWalletName(getWalletName)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={styles.row_View}>
                <View style={styles.row_content_style}>
                    <Image source={item.imageSource} style={styles.imgStyle} />
                    <View>
                        <Text style={[styles.label_text, { color: themeColor.text }]}>{item.name}</Text>
                        <Text style={[styles.wallet_type, { color: item.id == selectedId ? "green" : themeColor.subText }]}>

                            {item.id === selectedId ? Strings.English.ManageWallets.walletType1 : Strings.English.ManageWallets.walletType2}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    {/* {bin && <Image style={styles.bin_style} source={bin} />} */}
                    <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
                        <Image source={item.imageSource2} style={styles.DangerCircle_style} />

                    </TouchableOpacity>
                </View>

            </View>
            <SeperateLine top_line={styles.top_line} />
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <CustomHeader header={Strings.English.ManageWallets.manageWallets} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }} />

            <SeperateLine />

            <View style={styles.content_mainView}>
                <FlatList
                    data={data}
                    ItemSeparatorComponent={() => (
                        <View >
                            <SeperateLine />
                        </View>
                    )}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />


            </View>
            <View style={styles.Button_view}>
                <Button name={Strings.English.ManageWallets.button_text} onPress={() => { props.navigation.navigate("onboarding") }} />
            </View>
            {/* {bottomSheetVisible && Platform.OS === 'android' ? (
                <ImageBackground
                source={images.futureBackgroundImg}
                // style={{
                //     height: "100%", width: "100%", 
                    
                // }}
                blurRadius={9}
            ></ImageBackground>
            ) : null} */}
            {/* <ImageBackground
                source={images.futureBackgroundImg}
                style={{
                    height: "100%", width: "100%",
                    justifyContent:"center"
                    
                }}
                blurRadius={9}
            > */}
            <ManageBottomSheet
         
                onOpen={() => setBottomSheetVisible(true)}
                onClose={() => setBottomSheetVisible(false)}
                panelRef={panelRef}
                navigation={props.navigation}
            />
            {/* </ImageBackground> */}
        </SafeAreaView>
    )
}

export default ManageWallets

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },
    content_mainView: {
        marginHorizontal: dimen(24),
        flex: 0.95
    },
    Button_view: {
        marginBottom: dimen(80),
        flex: 0.05,
        marginHorizontal: dimen(24)
    },
    row_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: dimen(20)
    },
    row_content_style: {
        flexDirection: "row",
        gap: 10
    },
    imgStyle: {
        height: dimen(44),
        width: dimen(44),
    },
    label_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black
    },
    wallet_type: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    imgStyle: {
        height: dimen(44),
        width: dimen(44),
    },
    top_line: {
        marginTop: dimen(16),
        borderWidth: 0.2,
        width: "100%",
        borderColor: colors.seperateLine,
    },
    DangerCircle_style: {
        height: dimen(22),
        width: dimen(22),
    },
    bin_style: {

        height: dimen(18),
        width: dimen(15),
    }



})