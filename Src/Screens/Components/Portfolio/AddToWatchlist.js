import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import colors from '../../../Theme/Colors';
import CustomSearchBar from '../../Common/CustomSearchBar';
import Button from '../../Common/CustomButton';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';

const AddToWatchlist = (props) => {
    const { colors: themeColor, image } = useTheme();
    const [search, setSearch] = useState("");
    const [list, setList] = useState([
        { id: '1', imageSource: images.notification2, name: 'Binance', name2: "BNB", imageSource2: image.closeStar },
        { id: '2', imageSource: images.notification1, name: 'Bitcoin', name2: "BTC", imageSource2: image.closeStar },
        { id: '3', imageSource: image.ethImage, name: 'Ethereum', name2: "ETH", imageSource2: image.openStar },
        { id: '4', imageSource: images.tron, name: 'Tron', name2: "TRX", imageSource2: image.openStar },
    ]);
    

    const handlePress = (itemId) => {
        setList(prevList => prevList.map(item => {
            if (item.id === itemId) {
                return { ...item, imageSource2: item.imageSource2 === image.openStar ? image.closeStar : image.openStar };
            }
            return item;
        }));
    };

    const handleSearch = (text) => {
        setSearch(text);
        const filteredData = list.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setList(filteredData);
    };

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={item.imageSource} style={styles.image} />
                <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                <Text style={[styles.name, { color: themeColor.subText }]}>{item.name2}</Text>
            </View>
            <TouchableOpacity onPress={() => handlePress(item.id)}>
                <Image source={item.imageSource2} style={styles.image2} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Search Asset" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Watchlist") }} />
            <SeperateLine />
            <View style={styles.topMain_view}>
                <View style={styles.searchbar_view}>
                    <CustomSearchBar onChangeText={handleSearch} value={search}/>
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
            </View>
            <View style={styles.btn_view}>
                <Button name="Continue" onPress={() => { props.navigation.navigate("Watchlist") }} />
            </View>
        </SafeAreaView>
    );
};

export default AddToWatchlist;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    topMain_view: {
        flex: 0.9
    },
    searchbar_view: {
        marginTop: dimen(24)
    },
    btn_view: {
        flex: 0.15,
        marginHorizontal: dimen(24)
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
    image2: {
        width: dimen(24),
        height: dimen(24),
    },
});
