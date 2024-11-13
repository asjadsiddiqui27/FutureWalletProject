
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../Theme/Colors';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import SeperateLine from '../../Common/SeperateLine';
import CustomSearchBar from '../../Common/CustomSearchBar';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Send = (props) => {
    const { colors: themeColor } = useTheme();
    const [searchData, setSearchData] = useState("");
    const [list, setList] = useState([]);

    
    const ethBalance = Number(useSelector((state) => state.app.ethBalance)) || 0;
    const bnbBalance = Number(useSelector((state) => state.app.bnbBalance)) || 0;
    const btcBalance = Number(useSelector((state) => state.app.btcBalance)) || 0;
    const tronBalance = Number(useSelector((state) => state.app.tronBalance)) || 0;
    const maticBalance = Number(useSelector((state) => state.app.maticBalance)) || 0;

   

    const updatedData = [
        { id: '1', imageSource: images.notification2, name: 'Binance', amount: bnbBalance, text3: "SendBnb" },
        { id: '2', imageSource: images.notification3, name: 'Ethereum', amount: ethBalance, text3: "SendEth" },
        { id: '3', imageSource: images.notification1, name: 'Bitcoin', amount: btcBalance, text3: "SendBtc" },
        { id: '4', imageSource: images.tron, name: 'Tron', amount: tronBalance, text3: "SendTrx" },
        { id: '5', imageSource: images.polygon, name: 'Matic', amount: maticBalance, text3: "SendMatic" }
    ];
    useEffect(() => {
        setList(updatedData);
    }, [ethBalance, bnbBalance, btcBalance, tronBalance, maticBalance]);

    const filterData = (text) => {
        const filteredData = list.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setList(filteredData);
    };

    const handleSearch = (text) => {
        setSearchData(text);
        if (text === '') {
            setList(updatedData);
        } else {
            filterData(text);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { props.navigation.navigate(item.text3) }}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                </View>
                <View>
                    <Text style={[styles.value, { color: themeColor.text }]}>{item.amount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.main_conatiner, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Send" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("TabNavigation") }} />
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
        </SafeAreaView>
    );
}

export default Send;

const styles = StyleSheet.create({
    main_conatiner: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    row: {
        marginHorizontal: dimen(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: dimen(16)
    },
    image: {
        width: dimen(44),
        height: dimen(44)
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        marginLeft: dimen(8)
    },
    value: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black
    }
});
