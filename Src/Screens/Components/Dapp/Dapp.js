import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { images } from '../../../Theme/Images';
import CustomSearchBar from '../../Common/CustomSearchBar';
import SeperateLine from '../../Common/SeperateLine';
import CustomHeader from '../../Common/CustomHeader';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { useTheme } from '@react-navigation/native';

const data = [
    { id: '1', imageSource: images.compoundLogo, name: 'Compound', about: "Compound is an algorithmic, autonomous ...", arrow: images.rightBlueArrow },
    { id: '2', imageSource: images.dappLogo, name: 'PancakeSwap', about: "Pancakeswap is an automated market ...", arrow: images.rightBlueArrow },
    { id: '3', imageSource: images.compoundLogo, name: 'Sushi', about: "Be a Defi Chef with Sushi. Swap, earn, stack ...", arrow: images.rightBlueArrow },
    { id: '4', imageSource: images.dappLogo, name: 'Uniswap', about: "Uniswap is a decentralized finance protocol ...", arrow: images.rightBlueArrow },
    { id: '5', imageSource: images.compoundLogo, name: 'Compound', about: "Compound is an algorithmic, autonomous ...", arrow: images.rightBlueArrow },
    { id: '6', imageSource: images.dappLogo, name: 'PancakeSwap', about: "Pancakeswap is an automated market ...", arrow: images.rightBlueArrow },
];

const Dapp = () => {
    const {colors: themeColor, image} = useTheme()
    const [search, setSearch] = useState("")
    const [list, setList] = useState(data);


    const filterData = (text) => {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setList(filteredData);
    };
    const handleSearch = (text) => {
        setSearch(text);
        if (text === "") {
            setList(data)
        }
        else {
            filterData(text)
        }
    }

    const renderItem = ({ item }) => (
        <View style={[styles.itemContainer,{backgroundColor:themeColor.cardBackground}]}>
            <View style={{ alignItems: "center" }}>
                <Image source={item.imageSource} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.name,{color:themeColor.text}]}>{item.name}</Text>
                <Text style={[styles.about,{color:themeColor.subText}]}>{item.about}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
                <Image source={item.arrow} style={styles.arrowImg} />
            </View>

        </View>
    );

    return (
        <SafeAreaView style={[styles.main_container,{backgroundColor:themeColor.background}]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Dapp" header_style={styles.header} headerimg={{tintColor:themeColor.text}}/>
            <SeperateLine />
            <View style={{ marginTop: dimen(20) }}>
                <CustomSearchBar onChangeText={handleSearch} value={search}/>
            </View>
            <FlatList
                data={list}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>

    );
};

export default Dapp;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White

    },
    header: {
        marginHorizontal: dimen(21)
    },
   
    itemContainer: {
        height: dimen(205),
        width: dimen(180),
        marginHorizontal: dimen(14),
        backgroundColor: colors.lightCardBg,
        padding: dimen(10),
        borderRadius: dimen(12),
        marginTop: dimen(20)
    },
    image: {
        width: dimen(68),
        height: dimen(68),
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        textAlign: "center"
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        paddingVertical: dimen(12)
    },
    about: {
        fontSize: 12,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
        textAlign: "center"
    },
    arrowImg: {
        height: dimen(22),
        width: dimen(22),

    },
    searchContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: dimen(20),

    },
    searchInputContainer: {
        borderColor: colors.Black,
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 12,
    },
    searchInput: {
        fontSize: 16,
    },
});
