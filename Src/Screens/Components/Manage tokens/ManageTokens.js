import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import CustomSearchBar from '../../Common/CustomSearchBar';
import { images } from '../../../Theme/Images';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import Button from '../../Common/CustomButton';
import { Strings } from '../../../Theme/Strings';

const data = [
    { id: '1', imageSource: images.notification2, name: Strings.English.manageToken.Binance, name2: Strings.English.manageToken.BNB, toggled: true },
    { id: '2', imageSource: images.notification1, name: Strings.English.manageToken.Bitcoin, name2: Strings.English.manageToken.BTC, toggled: false },
    { id: '3', imageSource: images.notification3, name: Strings.English.manageToken.Ethereum, name2: Strings.English.manageToken.ETH, toggled: true },
    { id: '4', imageSource: images.tron, name: Strings.English.manageToken.Tron, name2: Strings.English.manageToken.TRX, toggled: false },
];

const ManageTokens = (props) => {
    const { colors: themeColor } = useTheme();
    const [searchData, setSearchData] = useState('');
    const [list, setList] = useState(data);

    const filterData = (text) => {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setList(filteredData);
    };

    const handleSearch = (text) => {
        setSearchData(text);
        if (text === '') {
            setList(data);
        } else {
            filterData(text);
        }
    };
    const handleToggle = (id) => {
        const updatedList = list.map(item => {
            if (item.id === id) {
                return { ...item, toggled: !item.toggled };
            }
            return item;
        });
        setList(updatedList);
    };

    const renderItem = ({ item }) => (

        <View style={styles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.imageSource} style={styles.image} />
                <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                <Text style={[styles.name2, { color: themeColor.subText }]}>{item.name2}</Text>
            </View>
            <TouchableOpacity onPress={() => handleToggle(item.id)}>
                <Image source={item.toggled ? images.toggleGreen : images.ToggleOff} style={styles.image2} />
            </TouchableOpacity>
        </View>

    );

    return (
        <SafeAreaView style={[styles.mainContainer, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader
                header={Strings.English.manageToken.headerName}
                header_style={styles.header}
                headerimg={{ tintColor: themeColor.text }}
                onPress={() => { props.navigation.navigate("Dashboard") }}
            />
            <SeperateLine />
            <View style={{ marginTop: dimen(20) }}>
                <CustomSearchBar value={searchData} onChangeText={handleSearch} />
            </View>
            <FlatList
                data={list}
                ItemSeparatorComponent={() => (
                    <View style={{ marginHorizontal: dimen(24) }}>
                        <SeperateLine />
                    </View>
                )}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
             <View style={styles.footer_container}>
                    <Button name={Strings.English.manageToken.buttonText} onPress={()=>{props.navigation.navigate("AddCustomToken")}}/>
                </View>
        </SafeAreaView>
    );
};

export default ManageTokens;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.White,
    },
    header: {
        marginHorizontal: dimen(21),
    },
    row: {
        marginHorizontal: dimen(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: dimen(16),
    },
    image: {
        width: dimen(44),
        height: dimen(44),
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        marginLeft: dimen(8),
    },
    name2: {
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.Gray,
        marginLeft: dimen(8),
    },
    image2: {
        width: dimen(39),
        height: dimen(23),
    },
    footer_container: {
        marginHorizontal:dimen(24),
        marginBottom: dimen(66.88),
      

    },
});
