import React from 'react';
import { Image, StatusBar, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../../Theme/Colors';
import CustomHeader from '../../Common/CustomHeader';
import { Strings } from '../../../Theme/Strings';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CommonSettingRow from './CommonSettingRow';
import { images } from '../../../Theme/Images';
import SeperateLine from '../../Common/SeperateLine';

const Settings = (props) => {

    const data = [
        { id: '1', image1Source: images.blueManageWallet, image2Source: images.settingGreater, text1: Strings.English.Settings.ManageWallets, text2: Strings.English.Settings.myWallet,text3:"ManageWallets" },
        { id: '2', image1Source: images.blueSecurity, image2Source: images.settingGreater, text1: Strings.English.Settings.security },
        { id: '3', image1Source: images.bluePreferences, image2Source: images.settingGreater, text1: Strings.English.Settings.preferences,text3:"preferences"  },
        { id: '4', image1Source: images.blueRewards, image2Source: images.settingGreater, text1: Strings.English.Settings.referralRewards },
        { id: '5', image1Source: images.blueNativeCurrency, image2Source: images.settingGreater, text1: Strings.English.Settings.nativeCurrency },
        { id: '6', image1Source: images.blueAddressBook, image2Source: images.settingGreater, text1: Strings.English.Settings.addressBook },
        { id: '7', image1Source: images.blueContactUs, image2Source: images.settingGreater, text1: Strings.English.Settings.contactUs },
        { id: '8', image1Source: images.blueAboutUs, image2Source: images.settingGreater, text1: Strings.English.Settings.aboutUs },
        { id: '9', image1Source: images.bluePrivacyPolicy, image2Source: images.settingGreater, text1: Strings.English.Settings.privacyPolicy },
        { id: '10', image1Source: images.bluePrepaidCards, image2Source: images.settingGreater, text1: Strings.English.Settings.prepaidCards },
        { id: '11', image1Source: images.blueFacebook, image2Source: images.settingGreater, text1: Strings.English.Settings.facebook },
        { id: '12', image1Source: images.blueInstagram, image2Source: images.settingGreater, text1: Strings.English.Settings.instagram },
        { id: '13', image1Source: images.blueTelegram, image2Source: images.settingGreater, text1: Strings.English.Settings.telegram },
        { id: '14', image1Source: images.blueFutureWallet, image2Source: images.settingGreater, text1: Strings.English.Settings.futurewalletcom },
        { id: '15', image1Source: images.blueLogout, image2Source: images.settingGreater, text1: Strings.English.Settings.logout,text3:"onboarding" },

    ];

    const renderItem = ({ item }) => (
        <View style={{ marginHorizontal: dimen(24) }}>

            <CommonSettingRow
                onPress={() => { props.navigation.navigate(item.text3) }}
                text1={item.text1}
                text2={item.text2}
                image1Source={item.image1Source}
                image2Source={item.image2Source}
            />


        </View>

    );

    return (
        <View style={styles.main_container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.header_view}>
                <CustomHeader header={Strings.English.Settings.settings} onPress={() => { props.navigation.navigate("TabNavigation") }} />
            </View>
           <SeperateLine/>
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
