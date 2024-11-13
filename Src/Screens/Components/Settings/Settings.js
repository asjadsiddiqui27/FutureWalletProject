import React, { useContext, useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../../Theme/Colors';
import CustomHeader from '../../Common/CustomHeader';
import { Strings } from '../../../Theme/Strings';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CommonSettingRow from './CommonSettingRow';
import { images } from '../../../Theme/Images';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import { AppContext } from '../../../Theme/themes/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = (props) => {
    const { colors: themeColor, image } = useTheme();
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);
    const [walletName, setWalletName] = useState("");
    const data = [
        { id: '1', image1Source: images.blueManageWallet, image2Source: images.settingGreater, text1: Strings.English.Settings.ManageWallets, text2: walletName, text3: "ManageWallets" },
        { id: '2', image1Source: images.blueSecurity, image2Source: images.settingGreater, text1: Strings.English.Settings.security ,text3:"Security"},
        { id: '3', image1Source: images.bluePreferences, image2Source: image.theme, text1: Strings.English.Settings.preferences, text3: 'preferences' },
        { id: '4', image1Source: images.blueRewards, image2Source: images.settingGreater, text1: Strings.English.Settings.referralRewards },
        { id: '5', image1Source: images.blueNativeCurrency, image2Source: images.settingGreater, text1: Strings.English.Settings.nativeCurrency, text3: 'NativeCurrency' },
        { id: '6', image1Source: images.blueAddressBook, image2Source: images.settingGreater, text1: Strings.English.Settings.addressBook, text3: 'AddressBook' },
        { id: '7', image1Source: images.blueAboutUs, image2Source: images.settingGreater, text1: Strings.English.Settings.aboutUs },
        { id: '8', image1Source: images.bluePrivacyPolicy, image2Source: images.settingGreater, text1: Strings.English.Settings.privacyPolicy },
        { id: '9', image1Source: images.blueFutureWallet, image2Source: images.settingGreater, text1: Strings.English.Settings.futurewalletcom },
        { id: '10', image1Source: images.blueLogout, image2Source: images.settingGreater, text1: Strings.English.Settings.logout, text3: "onboarding" },
    ];

    const toggleTheme = () => {
        setIsDarkTheme(previousState => !previousState);
    };

    const renderItem = ({ item }) => (
        <View style={{ marginHorizontal: dimen(24) }}>
            {item.id === '3' ? (
                <CommonSettingRow
                    onPress={toggleTheme} 
                    text1={item.text1}
                    text2={item.text2}
                    image1Source={item.image1Source}
                    image2Source={image.theme} 
                />
            ) : (
                <CommonSettingRow
                    onPress={() => { props.navigation.navigate(item.text3) }}
                    text1={item.text1}
                    text2={item.text2}
                    image1Source={item.image1Source}
                    image2Source={item.image2Source}
                />
            )}
        </View>
    );
    useEffect(() => {
        const getUser = async () => {
            try {  
                const getWalletName = JSON.parse(await AsyncStorage.getItem('name'));
                    setWalletName(getWalletName)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    return (
        <View style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            {/* <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" /> */}
            <View style={styles.header_view}>
                <CustomHeader header={Strings.English.Settings.settings} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("TabNavigation") }} />
            </View>
            <SeperateLine />
            <FlatList
                data={data}
                ItemSeparatorComponent={() => (
                    <View style={{ marginHorizontal: dimen(24) }}>
                        <SeperateLine />
                    </View>
                )}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    header_view: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },
});
