import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../Theme/Colors';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import SeperateLine from '../../Common/SeperateLine';
import CustomSearchBar from '../../Common/CustomSearchBar';
import { useTheme } from '@react-navigation/native';

const data = [
    { id: '1', imageSource: images.notification2, name: 'Binance', amount: '0 BNB' },
    { id: '2', imageSource: images.notification1, name: 'Bitcoin', amount: '0 BTC' },
    { id: '3', imageSource: images.notification3, name: 'Ethereum', amount: '0 ETH' },
    { id: '4', imageSource: images.tron, name: 'Tron', amount: '0 TRX' },
];

const Receive = (props) => {
    const { colors: themeColor, image } = useTheme();
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

    const renderItem = ({ item }) => (
        <TouchableOpacity>
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
            <CustomHeader header="Receive" header_style={styles.header} onPress={() => { props.navigation.navigate("TabNavigation") }} headerimg={{ tintColor: themeColor.text }} />
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

export default Receive;

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
        marginLeft: dimen(8)
    },
    value: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
    },
    SeperateLine: {
        borderWidth: 0.195,
        borderColor: colors.greenText,
    }
});
